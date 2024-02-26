<script lang="ts">
    import { page } from "$app/stores";

    import Text from "@/shared/components/Text.svelte";
	import Stack from "@/shared/components/Stack.svelte";

	import { allMeetings } from "@/features/meeting";

    let meetingId = $page.url.searchParams.get('meetingId');

    $: meeting = $allMeetings.find(meet => String(meet.id) === meetingId)!;

    let wrapper: HTMLElement;
</script>

<!-- TODO: i18n -->
<meeting-card-wrapper bind:this={wrapper} style:height="{wrapper?.parentElement?.offsetHeight}px">
    <Stack gap="10" direction="vertical" align="center" justify="center">
        <meeting-card>
            <Text bold>
                {meeting?.card}
            </Text>
        </meeting-card>
        <Stack gap="6" direction="vertical" align="center" justify="center">
            <Text bold role="main">Поднимите телефон вверх</Text>
            <Text role="secondary" align="center">
                Если вы находитесь в одной комнате - это удобный способ найти друг-друга
            </Text>
        </Stack>
    </Stack>
</meeting-card-wrapper>

<style>
    meeting-card-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;

        width: 100%;
        height: 100%;

        flex-grow: 1;
    }

    meeting-card {
        font-size: 136px;

        display: flex;
        align-items: center;
        justify-content: center;

        border-radius: 100%;

        width: 300px;
        height: 300px;
        background: var(--bg-main-color);
    }
</style>
