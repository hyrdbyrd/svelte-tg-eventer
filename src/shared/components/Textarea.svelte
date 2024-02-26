<script lang="ts">
	import Text from './Text.svelte';
	import Field from './Field.svelte';

	export let name: string = '';
	export let value: string = '';
	export let placeholder: string = '';

	export let rows = 2;
</script>

<label>
	<Field class={$$restProps.class}>
		<Text slot="name" bold role="accent">{name}</Text>
		<textarea {rows} slot="content" {placeholder} {name} bind:value />
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
