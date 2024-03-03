<script lang="ts">
	import { endedMeetings } from '@/features/meeting';

	import MeetingsList from './MeetingsList.svelte';

	$: fastMeets = $endedMeetings.filter(meet => meet.type !== 'CUSTOM_MEETING');
	$: customMeets = $endedMeetings.filter(meet => meet.type === 'CUSTOM_MEETING');
</script>

<!-- TODO: i18n -->
<MeetingsList title="Быстрые" meetings={fastMeets} />
<MeetingsList title="С параметрами" meetings={customMeets} />
