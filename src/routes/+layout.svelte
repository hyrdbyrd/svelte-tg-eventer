<script lang="ts">
	import { onMount } from 'svelte';
	import { attachLogger } from 'effector-logger';

	import { dev } from '$app/environment';

	import { getTelegram } from '@/shared/lib';

	import '@/styles.css';

	let mounted = false;

	onMount(() => {
		getTelegram().ready();
		mounted = true;
	});

	import { afterUpdate } from 'svelte';

    import { page } from '$app/stores';

    import { getAllUsersFx, getUserFx } from '@/features/user';
    import {
        getUserMeetingsFx,
        fastMeetingUserFound,
        getEndedUserMeetingsFx,
        getAvailableCustomMeetingsFx,
    } from '@/features/meeting';

	import { goFromMain } from '@/shared/lib';
    import { showBackButton, hideBackButton } from '@/shared/lib';

    let userId = $page.url.searchParams.get('userId')!;
    let eventId = $page.url.searchParams.get('eventId')!;

    // Подгружаем всех пользователей
    getAllUsersFx(eventId);
    getUserFx({ eventId, userId });

    // Подгружаем встречи
    getAvailableCustomMeetingsFx(eventId);
    getUserMeetingsFx({ eventId, userId });
    getEndedUserMeetingsFx({ eventId, userId });

    // Слушаем событие "Собеседник найден"
    afterUpdate(() =>
        fastMeetingUserFound.watch((data) => goFromMain('meeting', { meetingId: data.id! }))
    );

    $: {
        if ($page.url.pathname === '/') hideBackButton();
        else showBackButton();
    }

	if (dev) attachLogger();
</script>

<div class="app">
	<main>
		{#if mounted}
			<slot />
		{/if}
	</main>
</div>

<style>
	.app {
		display: flex;
		padding-bottom: 50px;
		flex-direction: column;
		box-sizing: border-box;
		min-height: calc(100vh);
	}

	main {
		flex: 1;
		width: 100%;
	}
</style>
