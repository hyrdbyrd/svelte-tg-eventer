<script lang="ts">
    import { afterUpdate } from 'svelte';

    import { page } from '$app/stores';

    import Button from '@/shared/components/Button.svelte';
    import EmojiIcon, { type EmojiType } from '@/shared/components/EmojiIcon.svelte';

    import { raffle, userRegisteredToRaffleFx, userSeenRaffleFx } from '@/features/raffle';
    import { Footer } from '@/features/footer';
	import Stack from '@/shared/components/Stack.svelte';
	import Text from '@/shared/components/Text.svelte';

    let userId = $page.url.searchParams.get('userId')!;
	let eventId = $page.url.searchParams.get('eventId')!;

    $: status = $raffle.status;
    $: prizeName = $raffle.prizeName;

    let isLoading = false;

    // TODO: i18n

    let emojiIcon: EmojiType = 'ticket';
    let title = 'Розыгрыш призов от мероприятия';
    let desc = 'Организаторы подготовили для вас несколько призов. Ближе к концу мероприятия мы разыграем их.'

    $: {
        switch (status) {
            case 'NOT_WON':
                emojiIcon = 'cloud';
                title = 'Не повезло';
                desc = 'Ничего страшного, повезет в следующий раз!';
                break;
            case 'WON':
                emojiIcon = 'congrats';
                title = prizeName ? `Ваш приз: ${prizeName!}` : '';
                desc = 'Для получения приза свяжитесь с организаторами или дождитесь объявления';
                break;
            default:
                break;
        }
    }

    function handleRegistraion() {
        isLoading = true;
        userRegisteredToRaffleFx({ eventId, userId })
            .finally(() => isLoading = false);
    }

    afterUpdate(() => {
        if ($raffle.isUserSeen) return;
        userSeenRaffleFx({ eventId, userId });
    });
</script>

<svelte-raffle>
    <Stack gap="24" direction="vertical" align="center" justify="center">
        <EmojiIcon emoji={emojiIcon} />
        <Stack gap="6" direction="vertical" justify="center" align="center">
            {#if title}
                <Text align="center" bold role="main">{title}</Text>
            {/if}
            <Text role="secondary" align="center">{desc}</Text>
        </Stack>
    </Stack>
</svelte-raffle>

<Footer>
    {#if status === 'NOT_REGISTERED'}
        <Button wide disabled={isLoading} on:click={handleRegistraion}>Участвовать в розыгрыше</Button>
    {:else if status === 'REGISTERED'}
        <Button wide color="green">Вы участвуете в розыгрыше</Button>
    {:else}
        <Button wide disabled>Розыгрыш закончился</Button>
    {/if}
</Footer>

<style>
    svelte-raffle {
        box-sizing: border-box;

        padding: 4px;

        width: 100vw;
        height: 80vh;

        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>
