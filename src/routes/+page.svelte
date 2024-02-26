<script lang="ts">
    import { page } from '$app/stores';

	import { goFromMain } from '@/shared/lib';
	import Button from '@/shared/components/Button.svelte';

    import { starSearchFastMeeting } from '@/entities/user';

	import Footer from '@/features/footer/components/Footer.svelte';

	import { RootNavigation } from '@/widgets/rootNavigation';
	import { AvailableMeetingsList, MyMeetingsList } from '@/widgets/meetingsList';

    let searchStarted = false;

    function handleFastMeet() {
        searchStarted = true;
        starSearchFastMeeting($page.url.searchParams.get('eventId')!, $page.url.searchParams.get('userId')!);
    }

    function handleCustomMeet() {
        goFromMain('custom-meet');
    }
</script>

<RootNavigation />

<MyMeetingsList />

<AvailableMeetingsList />

<Footer>
    <Button wide disabled={searchStarted} on:click={handleFastMeet}>
        Быстрая встреча
    </Button>
    <Button wide on:click={handleCustomMeet}>
        Создать встречу
    </Button>
</Footer>
