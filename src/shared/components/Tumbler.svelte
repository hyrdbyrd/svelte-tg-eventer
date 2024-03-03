<script lang="ts">
	import Stack from './Stack.svelte';
	import Text from './Text.svelte';

	export let checked: boolean = false;

	export let title: string = '';
	export let description: string = '';
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div on:click={() => (checked = !checked)}>
	<Stack gap="4" justify="between">
		<Stack direction="vertical" gap="4">
			<Text>{title}</Text>
			<Text role="secondary">{description}</Text>
		</Stack>
		<svelte-tumbler>
			<svelte-tumbler-body class:checked />
			<svelte-tumbler-bullet class:checked />
		</svelte-tumbler>
	</Stack>
</div>

<input type="checkbox" hidden bind:checked />

<style>
	svelte-tumbler {
		display: block;
		position: relative;

		display: flex;
		align-items: center;
		justify-content: center;
	}

	svelte-tumbler-body {
		transition: all linear 0.2s;

		width: 18px;
		height: 12px;
		border-radius: 10px;
		box-sizing: border-box;

		border: 2px solid var(--button-main-color);
	}

	svelte-tumbler-body.checked {
		background-color: var(--button-main-color);
	}

	svelte-tumbler-bullet {
		transition: all linear 0.2s;
		position: absolute;

		width: 16px;
		height: 16px;
		border-radius: 100%;
		box-sizing: border-box;

		border: 2px solid var(--button-main-color);
		background-color: var(--bg-secondary-color);

		transform: translate(-50%);
	}

	svelte-tumbler-bullet.checked {
		transform: translate(50%);
	}
</style>
