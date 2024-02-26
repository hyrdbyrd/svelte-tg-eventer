<script lang="ts">
	import Field from './Field.svelte';
	import Text from './Text.svelte';

	export let name: string;
	export let value: string;
</script>

<Field class={$$restProps.class}>
	<Text slot="name" role="main">{name}</Text>
	<Text slot="content" role="secondary">{value}</Text>
</Field>
