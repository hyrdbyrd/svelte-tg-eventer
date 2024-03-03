<script lang="ts">
	import { goFromMain } from '@/shared/lib/navigate';
	import Section from '@/shared/components/Section.svelte';

	import type { Meeting } from '@/entities/meeting';

	import MeetingCard from './MeetingCard.svelte';

	export let title: string;
	export let meetings: Meeting[];

	function handleMeeting(id: Nil<number>) {
		goFromMain('/meeting', { meetingId: id! });
	}
</script>

{#if meetings.length}
	<Section type="main" {title}>
		{#each meetings as meeting}
			<Section type="inner" on:click={() => handleMeeting(meeting.id)}>
				<MeetingCard {meeting} />
			</Section>
		{/each}
	</Section>
{/if}
