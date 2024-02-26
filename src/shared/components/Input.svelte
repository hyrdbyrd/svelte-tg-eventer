<script lang="ts">
	import Text from './Text.svelte';
	import Field from './Field.svelte';

	export let name: string = '';
	export let value: string = '';
	export let placeholder: string = '';
</script>

<label>
	<Field class={$$restProps.class}>
		<Text slot="name" bold role="accent">{name}</Text>
		<input {...$$restProps} class="" slot="content" {placeholder} {name} type="text" bind:value />
	</Field>
</label>

<!-- TODO: styles (rem/em) -->

<style>
	label {
		width: 100%;
	}

	input:focus,
	input {
		width: 100%;
		color: var(--text-main-color);

		padding: 0;
		border: none;
		outline: none;
		background: none;
	}

	input::placeholder {
		color: var(--text-secondary-color);
	}
</style>
