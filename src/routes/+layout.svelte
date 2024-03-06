<script lang="ts">
	import { onMount, afterUpdate } from 'svelte';
	import { attachLogger } from 'effector-logger';

	import { beforeNavigate, afterNavigate } from '$app/navigation';

	import { page } from '$app/stores';
	import { dev } from '$app/environment';

	import { goFromMain } from '@/shared/lib/navigate';
	import Loader from '@/shared/components/Loader.svelte';
	import { getTelegram, BackButton } from '@/shared/lib/telegram';

	import { getEventFx } from '@/features/event';
	import { getAllUsersFx, isFastMeetingAlredyExistFx } from '@/features/user';
	import {
		getUserMeetingsFx,
		triggerMyMeeting,
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
		// Проверяем начинал ли пользователь искать быструю встречу
		isFastMeetingAlredyExistFx({ eventId, userId }),
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
		triggerMyMeeting.watch((data) => goFromMain('meeting', { meetingId: data.id! }));
	});

	if (dev) attachLogger();
</script>

<BackButton />

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
