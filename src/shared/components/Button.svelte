<script lang="ts">
	export let wide = false;

	export let disabled: boolean = false;
	export let color: 'theme' | 'red' | 'green' = 'theme';
</script>

<button {disabled} class={color} class:wide on:click on:pointerdown on:pointerup {...$$restProps}>
	<slot />
</button>

<style>
	.red {
		color: white;
		background-color: var(--button-red-color);
	}

	.green {
		color: white;
		background-color: var(--button-green-color);
	}

	button:disabled, .gray {
		color: white;
		background-color: var(--button-disabled-color);
	}

	button {
		cursor: pointer;

		padding: 10px 15px;
		border-radius: var(--border-radius);

		border: none;
		outline: none;

		transition: all linear .2s;

		color: var(--button-text-color);
		background: var(--button-main-color);
	}

	.wide {
		width: 100%;
	}
</style>
