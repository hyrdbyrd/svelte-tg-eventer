<script lang="ts">
	import { myMeetings } from "@/features/meeting";

	import MeetingsList from "./MeetingsList.svelte";
</script>

<!-- TODO: i18n -->
<MeetingsList title="Мои встречи" meetings={$myMeetings} />
