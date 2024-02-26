<script lang="ts">
	import { page } from "$app/stores";

    import Text from "@/shared/components/Text.svelte";
    import Menu from '@/shared/components/Menu.svelte';
	import Field from "@/shared/components/Field.svelte";
    import Button from '@/shared/components/Button.svelte';
	import Section from "@/shared/components/Section.svelte";
    import AcceptIcon from '@/shared/components/AcceptIcon.svelte';
    import RejectIcon from "@/shared/components/RejectIcon.svelte";
	import { goFromMain, goToMain, getTelegram } from "@/shared/lib";
    import type { MenuItemType } from '@/shared/components/Menu.svelte';

    import { Footer } from '@/features/footer';
    import { UserAvatarsList, users } from '@/features/user';
	import { allMeetings, markMeetingFinishedFx, meetingNotHappendFx } from "@/features/meeting";

    let eventId = $page.params.eventId;
    let meetingId = $page.params.meetingId;
    let userId = $page.url.searchParams.get('userId')!;

    $: meeting = $allMeetings.find(meet => String(meet.id) === meetingId);
    $: meetUsers = $users.filter(user => meeting?.userIds?.includes(user.meta.id));

    const tg = getTelegram();

    function goToCard() {
        goFromMain(`meeting/${meeting!.id}/card/`);
    }

    function goToChat() {
        tg.sendData(JSON.stringify(meetingId));
    }

    let actions: MenuItemType[] = [
        {
            icon: AcceptIcon,
            text: 'Встреча закончилась',
            onClick: () => markMeetingFinishedFx({ eventId, userId, meetingId }).then(goToMain),
        },
        {
            icon: RejectIcon,
            text: 'Встреча не состоялась',
            onClick: () => meetingNotHappendFx({ eventId, userId, meetingId }).then(goToMain),
        }
    ];
</script>

<!-- TODO: i18n -->
{#if meeting}
    {#if meeting.type === 'FAST_MEETING'}
        <UserAvatarsList users={meetUsers} />
        <Section type="inner">
            <Field>
                <Text slot="name">{meeting.name || meetUsers.map(user => user.meta.userName).join(' ')}</Text>
                <Text slot="content" role="secondary">Имя</Text>
            </Field>
        </Section>
        {#if meeting.description}
            <Section type="inner">
                <Field>
                    <Text slot="name">{meeting.description}</Text>
                    <Text slot="content" role="secondary">Описание</Text>
                </Field>
            </Section>
        {/if}
        <Section title="Подробности" type="main">
            <Menu items={actions} />
        </Section>
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
