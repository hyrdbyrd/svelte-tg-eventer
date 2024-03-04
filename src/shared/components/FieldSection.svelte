<script lang="ts">
	import Text from './Text.svelte';
	import Field from './Field.svelte';
	import Section from './Section.svelte';

	export let accent = false;
	export let value: any = '';
	export let description: any = '';
</script>

<Section type="inner">
	<Field>
		<Text slot="name" role={accent ? 'accent' : 'main'} truncate={false}>
			{value}
			<slot name="value" />
		</Text>
		<Text slot="content" role="secondary" truncate={false}>
			{description}
			<slot name="description" />
		</Text>
	</Field>
</Section>
