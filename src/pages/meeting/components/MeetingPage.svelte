<script lang="ts">
	import { page } from '$app/stores';

	import { compact } from '@/shared/lib/stdlib';
	import Menu from '@/shared/components/Menu.svelte';
	import { getTelegram } from '@/shared/lib/telegram';
	import Button from '@/shared/components/Button.svelte';
	import Section from '@/shared/components/Section.svelte';
	import Textarea from '@/shared/components/Textarea.svelte';
	import ExitIcon from '@/shared/components/ExitIcon.svelte';
	import { goFromMain, goToMain } from '@/shared/lib/navigate';
	import UsersIcon from '@/shared/components/UsersIcon.svelte';
	import AcceptIcon from '@/shared/components/AcceptIcon.svelte';
	import RejectIcon from '@/shared/components/RejectIcon.svelte';
	import FieldSection from '@/shared/components/FieldSection.svelte';

	import { Footer } from '@/features/footer';
	import { UserAvatarsList, users } from '@/features/user';
	import {
		allMeetings,
		RateMeeeting,
		joinMeetingFx,
		markMeetingFx,
		leftMeetingFx,
		meetingNotHappendFx,
		markMeetingFinishedFx,
		acceptMeetingRequestFx,
		rejectMeetingRequestFx,
	} from '@/features/meeting';

	let userId = $page.url.searchParams.get('userId')!;
	let eventId = $page.url.searchParams.get('eventId')!;
	let meetingId = $page.url.searchParams.get('meetingId')!;

	let isLoading = false;

	let meeting = $allMeetings.find((meet) => String(meet.id) === meetingId);
	$: meetUsers = $users.filter((user) => meeting?.userIds?.includes(user.meta.id));
	$: meetUsersOmitCurrent = meetUsers.filter((user) => user.meta.id !== Number(userId));

	$: isCurrentUserOrganizator = String(meeting?.organizatorId) === userId;

	let rate = meeting?.rate || 0;
	$: rateText = meeting?.meetingNote || '';

	$: isRequest = meeting?.type === 'REQUEST';
	$: isFast = meeting?.type === 'FAST_MEETING';
	$: isCustom = meeting?.type === 'CUSTOM_MEETING';

	$: isMy = meeting?.queueType === 'MY';
	$: isEnded = meeting?.queueType === 'ENDED';
	$: isAvailable = meeting?.queueType === 'AVAILABLE';

	$: isRejected = meeting?.status === 'REJECTED';
	$: isWaitingResponse = meeting?.status === 'AWAITING_RESPONSE';

	$: isOneByOne = isRequest || isFast;
	$: isRateAvailable = isEnded && !isRejected && rate !== -1;

	$: menuItmes = compact([
		isOneByOne &&
			isMy &&
			!isEnded && {
				icon: AcceptIcon,
				text: 'Встреча закончилась',
				onClick: () => markMeetingFinishedFx({ eventId, userId, meetingId }).then(() => goToMain()),
			},
		isOneByOne &&
			isMy &&
			!isEnded && {
				icon: RejectIcon,
				text: 'Встреча не состоялась',
				onClick: () => meetingNotHappendFx({ eventId, userId, meetingId }).then(() => goToMain()),
			},
		!isOneByOne && {
			icon: UsersIcon,
			text: 'Участники',
			onClick: () => goFromMain('/meet-users', { meetingId }),
		},
		!isOneByOne &&
			!isEnded &&
			!isCurrentUserOrganizator &&
			isMy && {
				icon: ExitIcon,
				text: 'Покинуть встречу',
				onClick: () =>
					leftMeetingFx({ eventId, userId, meetingId }).then(() => goToMain({ meetingId })),
			},
	]);

	const tg = getTelegram();

	function goToCard() {
		goFromMain(`/card/`, { meetingId: meeting!.id! });
	}

	// TODO: logic
	function goToChat() {
		tg.openTelegramLink(meeting!.telegramChatLink!);
	}

	function markMeet() {
		isLoading = true;
		markMeetingFx({ eventId, meetingId, userId, mark: rate, meetingNote: rateText })
			.then(() => goFromMain('/'))
			.finally(() => (isLoading = false));
	}

	function joinMeeting() {
		isLoading = true;
		joinMeetingFx({ eventId, userId, meetingId })
			.then(() => goToMain())
			.finally(() => (isLoading = false));
	}

	function acceptMeeting() {
		isLoading = true;
		acceptMeetingRequestFx({
			eventId,
			userFromId: String(meeting!.organizatorId),
			userToId: userId,
		}).finally(() => (isLoading = false));
	}

	function rejectMeeting() {
		isLoading = true;
		rejectMeetingRequestFx({
			eventId,
			userFromId: String(meeting!.organizatorId),
			userToId: userId,
		}).finally(() => (isLoading = false));
	}
</script>

<!-- TODO: i18n -->
{#if meeting}
	<UserAvatarsList users={meetUsersOmitCurrent} />
	<FieldSection
		value={meeting.name || meetUsers.map((user) => user.meta.userName).join(' ')}
		description="Имя"
	/>
	{#if meeting.description}
		<FieldSection value={meeting.description} description="Описание" />
	{/if}
	{#if meeting.capacity}
		<FieldSection
			value={`${meetUsers.length} из ${meeting.capacity}`}
			description="Количество участников"
		/>
	{/if}

	{#if isRateAvailable}
		<Section type="main" title="Оценка">
			<Section type="inner">
				<RateMeeeting bind:currentRate={rate} />
			</Section>
			<Section type="inner">
				<Textarea
					bind:value={rateText}
					name="Впечатления от встречи"
					placeholder="Расскажите, как прошла встреча"
				/>
			</Section>
		</Section>
	{/if}

	{#if menuItmes?.length}
		<Section title="Подробности" type="main">
			<Menu items={menuItmes} />
		</Section>
	{/if}

	{#if isRateAvailable}
		<Footer>
			<Button wide on:click={markMeet} disabled={!rate || isLoading}>Сохранить</Button>
		</Footer>
	{:else if isAvailable && isCustom}
		<Footer>
			<Button wide on:click={joinMeeting}>Вступить</Button>
		</Footer>
	{:else if isMy && !isWaitingResponse}
		<Footer>
			{#if meeting.telegramChatLink}
				<Button wide on:click={goToChat}>Чат</Button>
			{/if}
			<Button on:click={goToCard} wide>Карточка</Button>
		</Footer>
	{:else if isRequest && isWaitingResponse && isMy && !isCurrentUserOrganizator}
		<Footer>
			<Button wide color="red" on:click={rejectMeeting}>Отклонить</Button>
			<Button wide color="green" on:click={acceptMeeting}>Принять</Button>
		</Footer>
	{:else if isRequest && isWaitingResponse && isMy && isCurrentUserOrganizator}
		<Footer>
			<Button wide disabled>Запрос отправлен</Button>
		</Footer>
	{/if}
{/if}
