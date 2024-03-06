<script lang="ts">
	import { page } from '$app/stores';

	import { compact } from '@/shared/lib/stdlib';
	import Menu from '@/shared/components/Menu.svelte';
	import { getTelegram } from '@/shared/lib/telegram';
	import Button from '@/shared/components/Button.svelte';
	import Section from '@/shared/components/Section.svelte';
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
		joinMeetingFx,
		markMeetingFx,
		leftMeetingFx,
		meetingNotHappendFx,
		markMeetingFinishedFx,
		acceptMeetingRequestFx,
		rejectMeetingRequestFx,
	} from '@/features/meeting';

	import Rate from './Rate.svelte';
	import { onMount } from 'svelte';

	let userId = $page.url.searchParams.get('userId')!;
	let eventId = $page.url.searchParams.get('eventId')!;
	let meetingId = $page.url.searchParams.get('meetingId')!;

	let isLoading = false;

	$: meeting = $allMeetings.find((meet) => String(meet.id) === meetingId);

	$: {
		if (!meeting)
			goToMain();
	}

	$: meetUsers = $users.filter((user) => meeting?.userIds?.includes(user.meta.id));
	$: meetUsersOmitCurrent = meetUsers.filter((user) => user.meta.id !== Number(userId));

	$: isCurrentUserOrganizator = String(meeting?.organizatorId) === userId;

	let rate = 0;
	let rateText = '';

	$: isRequest = meeting?.type === 'REQUEST';
	$: isFast = meeting?.type === 'FAST_MEETING';
	$: isCustom = meeting?.type === 'CUSTOM_MEETING';

	$: isMy = meeting?.queueType === 'MY';
	$: isEnded = meeting?.queueType === 'ENDED';
	$: isAvailable = meeting?.queueType === 'AVAILABLE';

	$: isRejected = meeting?.status === 'REJECTED';
	$: isWaitingResponse = meeting?.status === 'AWAITING_RESPONSE';

	$: canFinishMeeting = (isOneByOne || isCurrentUserOrganizator) && isMy && !isWaitingResponse && !isEnded;

	$: isOneByOne = isRequest || isFast;
	$: isRateAvailable = isEnded && !isRejected && rate !== -1;

	$: menuItmes = compact([
		!isOneByOne && {
			icon: UsersIcon,
			text: 'Участники',
			onClick: () => goFromMain('/meet-users', { meetingId }),
		},
		canFinishMeeting && {
			icon: AcceptIcon,
			disabled: isLoading,
			text: 'Встреча закончилась',
			onClick: () => {
				isLoading = true;
				markMeetingFinishedFx({ eventId, userId, meetingId }).then(() => goToMain());
			},
		},
		canFinishMeeting && {
			icon: RejectIcon,
			disabled: isLoading,
			text: 'Встреча не состоялась',
			onClick: () => {
				isLoading = true;
				meetingNotHappendFx({ eventId, userId, meetingId }).then(() => goToMain());
			},
		},
		!isOneByOne && !isEnded && !isCurrentUserOrganizator && isMy && {
			icon: ExitIcon,
			disabled: isLoading,
			text: 'Покинуть встречу',
			onClick: () => {
				isLoading = true;
				leftMeetingFx({ eventId, userId, meetingId }).then(() => goToMain({ meetingId }));
			},
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

	onMount(() => {
		rate = meeting?.rate || 0;
		rateText = meeting?.meetingNote || '';
	})
</script>

<!-- TODO: i18n -->
{#if meeting}
	<UserAvatarsList users={meetUsers} />
	<FieldSection
		description={isOneByOne ? "Имя" : "Название встречи"}
		value={meeting.name || meetUsersOmitCurrent.map((user) => user.meta.userName).join(' ')}
	/>

	{#if meeting.description}
		<FieldSection
			value={meeting.description}
			description={isOneByOne ? "Описание" : "Описание встречи"}
		/>
	{/if}

	{#if meeting.capacity}
		<FieldSection
			description="Количество участников"
			value={`${meetUsers.length} из ${meeting.capacity}`}
		/>
	{/if}

	{#if isRateAvailable}
		<Rate {meeting} bind:rate bind:rateText />
	{/if}

	{#if menuItmes?.length}
		<Section title="Подробности" type="main">
			<Menu disabled={isLoading} items={menuItmes} />
		</Section>
	{/if}

	{#if isRateAvailable}
		<Footer>
			<Button wide on:click={markMeet} disabled={!rate || isLoading}>Сохранить</Button>
		</Footer>
	{:else if isAvailable && isCustom}
		<Footer>
			<Button disabled={isLoading} wide on:click={joinMeeting}>Вступить</Button>
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
			<Button disabled={isLoading} wide color="red" on:click={rejectMeeting}>Отклонить</Button>
			<Button disabled={isLoading} wide color="green" on:click={acceptMeeting}>Принять</Button>
		</Footer>
	{:else if isRequest && isWaitingResponse && isMy && isCurrentUserOrganizator}
		<Footer>
			<Button wide disabled>Запрос отправлен</Button>
		</Footer>
	{/if}
{/if}
