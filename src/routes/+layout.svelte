<script lang="ts">
	import { onMount, afterUpdate } from 'svelte';
	import { attachLogger } from 'effector-logger';

	import { beforeNavigate, afterNavigate } from '$app/navigation';

	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import { dev } from '$app/environment';

	import { goFromMain } from '@/shared/lib/navigate';
	import { getTelegram } from '@/shared/lib/telegram';
	import Loader from '@/shared/components/Loader.svelte';
	import { showBackButton, hideBackButton } from '@/shared/lib/telegram';

	import { getEventFx } from '@/features/event';
	import { getAllUsersFx } from '@/features/user';
	import {
		getUserMeetingsFx,
		fastMeetingUserFound,
		getEndedUserMeetingsFx,
		getAvailableCustomMeetingsFx,
	} from '@/features/meeting';
	import { getRaffleFx, raffleEnd } from '@/features/raffle';

	import '@/styles.css';

	let userId = $page.url.searchParams.get('userId')!;
	let eventId = $page.url.searchParams.get('eventId')!;

	let mounted = false;
	let isLoading = false;

	beforeNavigate(() => (isLoading = true));
	afterNavigate(() => (isLoading = false));

	onMount(() => {
		const tg = getTelegram();

		tg.ready();
		if (!tg.isExpanded) tg.expand();

		mounted = true;
	});

	let waitFor = [
		// Подгружаем meta для мероприятия
		getEventFx(eventId).then((event) => {
			// Если есть розыгрышь в фичах, то делаем запрос
			if (event.features.includes('IS_RUFFLE_ALLOWED'))
				return getRaffleFx({ eventId, userId });

			return null;
		}),
		// Подгружаем всех пользователей
		getAllUsersFx(eventId),
		// Подгружаем встречи
		getUserMeetingsFx({ eventId, userId }),
		getEndedUserMeetingsFx({ eventId, userId }),
		getAvailableCustomMeetingsFx({ eventId, userId }),
	];

	afterUpdate(() => {
		// Слушаем завершение розыгрыша
		raffleEnd.watch(() => goFromMain('raffle'));
		// Слушаем событие "Собеседник найден"
		fastMeetingUserFound.watch((data) => goFromMain('meeting', { meetingId: data.id! }));
	});

	$: {
		if (
			// Для странички регистрации всегда прячем кнопку "назад"
			$page.url.pathname.includes('register') ||
			// Если путь НЕ похож на <корневой путь>/<что угодно>, то не показываем кнопку "назад"
			$page.url.pathname === (base.endsWith('/') ? base : `${base}/`)
		)
			hideBackButton();
		else showBackButton();
	}

	if (dev) attachLogger();
</script>

{#await Promise.all(waitFor)}
	<svelte-loader>
		<Loader />
	</svelte-loader>
{:then}
	<div class="app">
		<main style:opacity={isLoading ? '.2' : ''}>
			{#if mounted}
				<slot />
			{/if}
		</main>
		{#if isLoading}
			<svelte-loader>
				<Loader />
			</svelte-loader>
		{/if}
	</div>
{/await}

<style>
	.app {
		display: flex;
		overflow-y: auto;
		position: relative;
		flex-direction: column;
		box-sizing: border-box;
		min-height: var(--viewport-height);
		max-height: var(--viewport-height);
	}

	svelte-loader {
		width: 100%;
		height: 100%;

		top: 0;
		left: 0;
		position: fixed;

		display: flex;
		align-items: center;
		justify-content: center;
	}

	main {
		flex: 1;
		width: 100%;
	}
</style>
