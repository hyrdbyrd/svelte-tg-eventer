<script lang="ts">
	import { availableMeetings } from "@/features/meeting";

	import MeetingsList from "./MeetingsList.svelte";
</script>

<!-- TODO: i18n -->
<MeetingsList title="Доступные встречи" meetings={$availableMeetings} />
