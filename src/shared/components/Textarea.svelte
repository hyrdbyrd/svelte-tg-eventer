<script lang="ts">
	import { onMount, tick } from 'svelte';

	import Text from './Text.svelte';
	import Field from './Field.svelte';

	export let name: string = '';
	export let value: string = '';
	export let placeholder: string = '';

	let textareaRef: HTMLTextAreaElement | null = null;

	function handleHeight(element: HTMLTextAreaElement | null) {
		if (!element) return;
		element.style.height = 'auto';
		element.style.height = `${element.scrollHeight}px`;
	}

	function handleAdaptiveSize(ev: Event) {
		handleHeight(ev.target as HTMLTextAreaElement);
	}

	onMount(async () => {
		await tick();
		handleHeight(textareaRef);
	});

	export let rows = 2;
</script>

<label>
	<Field class={$$restProps.class}>
		<Text slot="name" bold role="accent">{name}</Text>
		<textarea
			{rows}
			{name}
			bind:value
			{placeholder}
			slot="content"
			bind:this={textareaRef}
			on:input={handleAdaptiveSize}
		/>
	</Field>
</label>

<!-- TODO: styles (rem/em) -->

<style>
	label {
		width: 100%;
	}

	textarea:focus,
	textarea {
		width: 100%;
		resize: none;

		font: var(--font-body);

		color: var(--text-main-color);

		padding: 0;
		border: none;
		outline: none;
		background: none;
	}

	textarea::placeholder {
		color: var(--text-secondary-color);
	}
</style>
