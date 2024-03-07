<script lang="ts">
	import { page } from '$app/stores';

	import { dotsTicker } from '@/shared/lib/actions';
	import { goFromMain } from '@/shared/lib/navigate';
	import Button from '@/shared/components/Button.svelte';

	import { event } from '@/features/event';
	import Footer from '@/features/footer/components/Footer.svelte';
	import { starSearchFastMeetingFx, isUserFastMeetingStarted, cancelFastMeetingFx } from '@/features/user';

	import { RootNavigation } from '@/widgets/rootNavigation';
	import { AvailableMeetingsList, MyMeetingsList } from '@/widgets/meetingsList';

	let userId = $page.url.searchParams.get('userId')!;
	let eventId = $page.url.searchParams.get('eventId')!;

	function handleFastMeet() {
		starSearchFastMeetingFx({ eventId, userId });
	}

	function handleCancelFastMeet() {
		cancelFastMeetingFx({ eventId, userId });
	}

	function handleCustomMeet() {
		goFromMain('custom-meet');
	}

	$: console.log('CHANGED1', $isUserFastMeetingStarted);
</script>

<RootNavigation />

<MyMeetingsList />

<AvailableMeetingsList />

<!-- TODO: i18n -->

<Footer>
	{#if $isUserFastMeetingStarted}
		<Button wide color="gray" on:click={handleCancelFastMeet}>
			<span use:dotsTicker>Поиск встречи</span>
		</Button>
	{:else}
		<Button wide on:click={handleFastMeet}>
			{$event.features.includes('IS_CUSTOM_MEETINGS_ALLOWED')
				? 'Быстрая встреча'
				: 'Найти случайного собеседника'}
		</Button>
	{/if}

	{#if $event.features.includes('IS_CUSTOM_MEETINGS_ALLOWED')}
		<Button wide on:click={handleCustomMeet}>Создать встречу</Button>
	{/if}
</Footer>
