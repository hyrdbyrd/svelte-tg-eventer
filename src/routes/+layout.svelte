<script lang="ts">
	import { attachLogger } from 'effector-logger';

	import { page } from '$app/stores';

	import '@/styles.css';

	import Header from '@/layouts/Header.svelte';

	attachLogger();
</script>

<Header title={$page.data.meta.title} />

<div class="app">
	<main>
		<slot />
	</main>
</div>

<style>
	.app {
		margin: var(--header-height) 0 0;

		display: flex;
		flex-direction: column;
		min-height: calc(100vh - var(--header-height) - 10px);
	}

	main {
		flex: 1;
		width: 100%;
		/* display: flex;
		padding: 1rem;
		margin: 0 auto;
		max-width: 64rem;
		flex-direction: column;
		box-sizing: border-box; */
	}
</style>
