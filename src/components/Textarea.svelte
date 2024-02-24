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
		<textarea slot="content" {placeholder} {name} bind:value />
	</Field>
</label>

<!-- TODO: styles (rem/em) -->

<style>
	label {
		width: 100%;
	}

	textarea:focus,
	textarea {
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
