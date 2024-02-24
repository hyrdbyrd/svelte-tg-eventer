<script lang="ts">
	import Text from './Text.svelte';
	import Stack from './Stack.svelte';
	import Rating from './Rating.svelte';
	import UsersList from './UsersList.svelte';

	// TODO: logic
	export let time: string;
	export let title: string;
	export let usersIds: string[] = [];
	export let rate: number | undefined = undefined;
	export let comment: string | undefined = undefined;
</script>

<Stack wide gap="8" direction="vertical">
	<Stack wide gap="4" justify="between" align="start">
		<Text role="main">{title}</Text>
		<Text role="secondary">{time}</Text>
	</Stack>
	<Stack wide gap="4" justify="between" align="center">
		<UsersList {usersIds} />
		{#if rate !== undefined}
			<Rating {rate} />
		{/if}
		{#if comment}
			<Text role="main">{comment}</Text>
		{/if}
	</Stack>
</Stack>
