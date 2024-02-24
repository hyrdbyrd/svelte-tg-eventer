<script lang="ts">
	import { page } from '$app/stores';

	import Text from '@/components/Text.svelte';
	import LeftArrow from '@/assets/LeftArrow.svelte';

	export let title: string;
</script>

<svelte:head>
	<title>{$page.data.meta.title}</title>
	<meta name="description" content={$page.data.meta.description} />
</svelte:head>

<header>
	<div class="wrapper">
		{#if $page.url.pathname && $page.url.pathname !== '/'}
			<a href="/">
				<LeftArrow />
			</a>
		{/if}
		<!-- TODO: styles -->
		<Text bold role="main">
			{title}
		</Text>
	</div>
</header>

<style>
	header {
		top: 0;
		left: 0;
		position: fixed;

		display: flex;
		align-items: center;
		justify-content: center;

		width: 100%;
		height: var(--header-height);

		color: var(--header-color);
		background-color: var(--header-bg-color);
	}

	.wrapper {
		width: 100%;
		position: relative;

		display: flex;
		align-items: center;
		justify-content: center;
	}

	a,
	a:visited {
		text-decoration: none;

		top: 0;
		left: 20px;
		position: absolute;

		height: 100%;

		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
