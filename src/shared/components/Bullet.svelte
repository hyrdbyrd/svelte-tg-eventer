<script lang="ts">
	export let value: Nil<number> | boolean = null;
</script>

{#if value}
	<svelte-bullet>
		<svelte-bullet-body>
			{#if typeof value !== 'boolean'}
				{value}
			{/if}
		</svelte-bullet-body>
	</svelte-bullet>
{/if}

<style>
	svelte-bullet {
		position: relative;

		display: flex;
		align-items: center;
		justify-content: center;

		width: 15px;
		height: 15px;

		border-radius: 100%;

		color: var(--button-text-color);
		background-color: var(--button-main-color);
	}

	svelte-bullet-body {
		font-size: 10px;
		position: absolute;
	}
</style>
