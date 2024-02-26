<script lang="ts">
	import Text from '@/shared/components/Text.svelte';
	import Stack from '@/shared/components/Stack.svelte';
	import Avatar from '@/shared/components/Avatar.svelte';
	import Section from '@/shared/components/Section.svelte';

	export let name: string;
	export let isCurrent = false;
	export let src: string | undefined;
</script>

<Section class={$$restProps.class}>
	<Stack gap="10">
		<Avatar {src} />
		<Stack direction="vertical">
			<Text role="main">{name}</Text>
			<!-- TODO: i18n -->
			<Text role="secondary">
				{#if isCurrent}
					Это вы
				{:else}
					Оффлайн
				{/if}
			</Text>
		</Stack>
	</Stack>
</Section>
