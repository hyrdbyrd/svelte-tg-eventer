<script lang="ts">
	import Text from './Text.svelte';

	export let value: number = 0;
</script>

{#if value}
	<span>
		<Text class="counterValue" role="main">
			{value}
		</Text>
	</span>
{/if}

<!-- TODO: styles -->

<style>
	span {
		background-color: var(--button-main-color);
	}

	:global(.counterValue) {
		font-size: 10px;
	}
</style>
