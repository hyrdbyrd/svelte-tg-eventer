<script lang="ts">
    import { page } from '$app/stores';
    import { goto } from '$app/navigation';

	import Button from '@/shared/components/Button.svelte';

    import { starSearchFastMeeting } from '@/entities/user';

	import Footer from '@/features/footer/components/Footer.svelte';

	import { RootNavigation } from '@/widgets/rootNavigation';
	import { AvailableMeetingsList, MyMeetingsList } from '@/widgets/meetingsList';

    let searchStarted = false;

    function handleFastMeet() {
        searchStarted = true;
        starSearchFastMeeting($page.params.eventId, $page.url.searchParams.get('userId')!);
    }

    function handleCustomMeet() {
        const newUrl = new URL($page.url);
        newUrl.pathname += 'meeting/create';
        goto(newUrl);
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
