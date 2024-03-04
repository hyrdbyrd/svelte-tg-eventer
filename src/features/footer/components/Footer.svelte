<script lang="ts">
	import Stack from '@/shared/components/Stack.svelte';
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

		padding-bottom: calc(6px + env(safe-area-inset-bottom, 0));

		box-shadow: 0px -4px 4px 0px color-mix(in srgb, var(--bg-secondary-color) 30%, transparent);

		height: var(--footer-height);
	}
</style>
