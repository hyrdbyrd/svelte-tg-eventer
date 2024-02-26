<script lang="ts">
	import Stack from "./Stack.svelte";
	import Section from "./Section.svelte";
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<menu-item on:click>
    <Section type="inner">
        <Stack gap="20" align="center">
            <slot name="icon" />
            <menu-item-content>
                <slot name="title" />
            </menu-item-content>
            <slot name="after" />
        </Stack>
    </Section>
</menu-item>

<style>
    menu-item-content {
        flex-grow: 1;
        display: block;
        cursor: pointer;
    }
</style>
