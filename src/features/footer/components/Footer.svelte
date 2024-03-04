<script lang="ts">
	import { onDestroy, onMount } from 'svelte';

	import { getTelegram } from '@/shared/lib/telegram';
	import Stack from '@/shared/components/Stack.svelte';

	const tg = getTelegram();

	let footer: HTMLElement | null = null;

	onMount(() => {
		if ($$slots.default && footer) {
			const styles = footer.getBoundingClientRect();

			footer.style.top = `${tg.viewportHeight - styles.height}px`;
			footer.style.height = '100%';

			const app = document.querySelector<HTMLElement>('.app');
			if (app) {
				app.style.paddingBottom = `${styles.height}px`;
			}
		}
	});

	onDestroy(() => {
		const app = document.querySelector<HTMLElement>('.app');
		if (app) app.style.paddingBottom = '';
	});

</script>

{#if $$slots.default}
	<footer bind:this={footer}>
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
		bottom: env(safe-area-inset-bottom);

		width: 100%;
		padding: 6px;

		padding-bottom: 6px;

		box-shadow: 0px -4px 4px 0px color-mix(in srgb, var(--bg-secondary-color) 30%, transparent);

		height: var(--footer-height);
	}
</style>
