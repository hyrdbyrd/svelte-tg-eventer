<script lang="ts">
	import Stack from "@/shared/components/Stack.svelte";
</script>

{#if $$slots.default}
    <footer>
        <Stack gap="6">
            <slot />
        </Stack>
    </footer>
{/if}

<style>
    footer {
        background-color: var(--bg-secondary-color);

        z-index: 1000;

        position: fixed;
        box-sizing: border-box;

        left: 0;
        bottom: 0;

        width: 100%;
        padding: 6px;

        box-shadow: 0px -4px 4px 0px rgba(0, 0, 0, .1);

        height: var(--footer-height);
    }
</style>
