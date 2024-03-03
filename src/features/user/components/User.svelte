<script lang="ts">
	import Text from '@/shared/components/Text.svelte';
	import Stack from '@/shared/components/Stack.svelte';
	import Avatar from '@/shared/components/Avatar.svelte';
	import Section from '@/shared/components/Section.svelte';
	import { goFromMain } from '@/shared/lib/navigate';

	export let name: string;
	export let userId: number;
	export let isCurrent = false;
	export let src: string | undefined;

	function handleClick() {
		if (isCurrent) goFromMain('/profile');
		else goFromMain('/user', { userForId: userId });
	}
</script>

<Section on:click={handleClick} class={$$restProps.class}>
	<Stack gap="10" align="center">
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
