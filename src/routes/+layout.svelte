<script lang="ts">
	import { onMount } from 'svelte';
	import { attachLogger } from 'effector-logger';

	import { dev } from '$app/environment';

	import { getTelegram } from '@/shared/lib';

	import '@/styles.css';

	let mounted = false;

	onMount(() => {
		getTelegram().ready();
		mounted = true;
	});

	if (dev) attachLogger();
</script>

<div class="app">
	<main>
		{#if mounted}
			<slot />
		{/if}
	</main>
</div>

<style>
	.app {
		display: flex;
		padding-bottom: 50px;
		flex-direction: column;
		box-sizing: border-box;
		min-height: calc(100vh);
	}

	main {
		flex: 1;
		width: 100%;
	}
</style>
