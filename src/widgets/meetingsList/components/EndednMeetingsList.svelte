<script lang="ts">
	import { endedMeetings } from "@/features/meeting";

	import MeetingsList from "./MeetingsList.svelte";
</script>

<!-- TODO: i18n -->
<MeetingsList title="История" meetings={$endedMeetings} />
