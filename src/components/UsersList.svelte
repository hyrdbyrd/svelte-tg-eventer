<script lang="ts">
	import Text from './Text.svelte';
	import Stack from './Stack.svelte';
	import Avatar from './Avatar.svelte';

	export let maxLength: number = 4;
	export let usersIds: string[] = [];
</script>

<Stack class={$$restProps.class} gap="8" align="center">
	{#if usersIds.length > maxLength}
		<!-- TODO: i18n -->
		<Text role="secondary">{maxLength} из {usersIds.length}</Text>
	{/if}

	{#each usersIds.slice(0, maxLength) as userId}
		<!-- TODO: logic -->
		<Avatar size={25} src={'/avatars/' + userId} />
	{/each}
</Stack>
