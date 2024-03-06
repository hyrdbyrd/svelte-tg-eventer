<script lang="ts">
	import { page } from '$app/stores';

	import { dotsTicker } from '@/shared/lib/actions';
	import { goFromMain } from '@/shared/lib/navigate';
	import Button from '@/shared/components/Button.svelte';

	import { starSearchFastMeeting } from '@/entities/user';

	import { event } from '@/features/event';
	import Footer from '@/features/footer/components/Footer.svelte';

	import { RootNavigation } from '@/widgets/rootNavigation';
	import { AvailableMeetingsList, MyMeetingsList } from '@/widgets/meetingsList';

	let searchStarted = false;

	function handleFastMeet() {
		searchStarted = true;
		starSearchFastMeeting(
			$page.url.searchParams.get('eventId')!,
			$page.url.searchParams.get('userId')!,
		);
	}

	function handleCustomMeet() {
		goFromMain('custom-meet');
	}
</script>

<RootNavigation />

<MyMeetingsList />

<AvailableMeetingsList />

<Footer>
	{#if searchStarted}
		<Button wide disabled>
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
