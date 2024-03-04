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
		<input
			{...$$restProps}
			{name}
			class=""
			bind:value
			type="text"
			on:keypress
			{placeholder}
			slot="content"
		/>
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
