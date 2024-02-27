<script lang="ts">
	import { page } from "$app/stores";

    import Menu from '@/shared/components/Menu.svelte';
    import Button from '@/shared/components/Button.svelte';
	import Section from "@/shared/components/Section.svelte";
    import Textarea from '@/shared/components/Textarea.svelte';
    import UsersIcon from '@/shared/components/UsersIcon.svelte';
    import AcceptIcon from '@/shared/components/AcceptIcon.svelte';
    import RejectIcon from "@/shared/components/RejectIcon.svelte";
	import FieldSection from "@/shared/components/FieldSection.svelte";
	import { goFromMain, goToMain, getTelegram, compact } from "@/shared/lib";

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
    } from "@/features/meeting";
	import ExitIcon from "@/shared/components/ExitIcon.svelte";

    let userId = $page.url.searchParams.get('userId')!;
    let eventId = $page.url.searchParams.get('eventId')!;
    let meetingId = $page.url.searchParams.get('meetingId')!;

    let isLoading = false;

    let meeting = $allMeetings.find(meet => String(meet.id) === meetingId);
    $: meetUsers = $users.filter(user => meeting?.userIds?.includes(user.meta.id));

    let rate = meeting?.rate || 0;
    $: rateText = meeting?.meetingNote || '';

    $: isEnded = meeting?.queueType === 'ENDED';
    $: isFast = meeting?.type === 'FAST_MEETING';
    $: isRejected = meeting?.status === 'REJECTED';
    $: isAccepted = meeting?.status === 'ACCEPTED';
    $: isAvailable = meeting?.queueType === 'AVAILABLE';

    $: menuItmes = compact([
        isFast && !isEnded && {
            icon: AcceptIcon,
            text: 'Встреча закончилась',
            onClick: () => markMeetingFinishedFx({ eventId, userId, meetingId }).then(() => goToMain()),
        },
        isFast && !isEnded && {
            icon: RejectIcon,
            text: 'Встреча не состоялась',
            onClick: () => meetingNotHappendFx({ eventId, userId, meetingId }).then(() => goToMain()),
        },
        !isFast && {
            icon: UsersIcon,
            text: 'Участники',
            onClick: () => goFromMain('/meet-users', { meetingId }),
        },
        !isEnded && !isFast && isAccepted && {
            icon: ExitIcon,
            text: 'Покинуть встречу',
            onClick: () => leftMeetingFx({ eventId, userId, meetingId }).then(() => goFromMain('/', { meetingId })),
        }
    ]);

    const tg = getTelegram();

    function goToCard() {
        goFromMain(`/card/`, { meetingId: meeting!.id! });
    }

    // TODO: logic
    function goToChat() {
        tg.sendData(JSON.stringify(meetingId));
    }

    function markMeet() {
        isLoading = true;
        markMeetingFx({ eventId, meetingId, userId, mark: rate, meetingNote: rateText })
            .then(() => goFromMain('/'))
            .finally(() => isLoading = false);
    }

    function joinMeeting() {
        isLoading = true;
        joinMeetingFx({ eventId, userId, meetingId })
            .then(() => goToMain())
            .finally(() => isLoading = false);
    }

    $: console.log(meeting);
</script>

<!-- TODO: i18n -->
{#if meeting}
    <UserAvatarsList users={meetUsers} />
    <FieldSection value={meeting.name || meetUsers.map(user => user.meta.userName).join(' ')} description="Имя" />
    {#if meeting.description}
        <FieldSection value={meeting.description} description="Описание" />
    {/if}
    {#if meeting.capacity}
        <FieldSection value={`${meetUsers.length} из ${meeting.capacity}`} description="Количество участников" />
    {/if}

    {#if isEnded && !isRejected && rate !== -1}
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

    {#if isEnded && !isRejected && rate !== -1}
        <Footer>
            <Button
                wide
                on:click={markMeet}
                disabled={!rate || isLoading}
            >
                Сохранить
            </Button>
        </Footer>
    {:else if isAvailable}
        <Footer>
            <Button wide on:click={joinMeeting}>Вступить</Button>
        </Footer>
    {:else if !isRejected && rate !== -1}
        <Footer>
            <Button wide on:click={goToChat}>
                Чат
            </Button>
            <Button on:click={goToCard} wide>
                Карточка
            </Button>
        </Footer>
    {/if}
{/if}
