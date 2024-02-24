<script lang="ts">
	import Text from './Text.svelte';
	import Stack from './Stack.svelte';
	import Avatar from './Avatar.svelte';

	export let name: string;
	export let isCurrent = false;
	export let src: string | undefined;
</script>

<div class={$$restProps.class}>
	<Stack gap="10">
		<Avatar {src} />
		<Stack direction="vertical">
			<Text role="main">{name}</Text>
			<!-- TODO: i18n -->
			<Text role="subtitle">
				{#if isCurrent}
					Это вы
				{:else}
					Оффлайн
				{/if}
			</Text>
		</Stack>
	</Stack>
</div>

<style>
	div {
		padding: 10px 20px;
		border: 1px solid var(--bg-secondary-color);
		background: var(--section-bg-color);
	}
</style>
