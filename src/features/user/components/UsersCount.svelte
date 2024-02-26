<script lang="ts">
	import Text from '@/shared/components/Text.svelte';
	import Stack from '@/shared/components/Stack.svelte';
	import Avatar from '@/shared/components/Avatar.svelte';

	import type { User } from '@/entities/user';

	export let users: User[] = [];
	export let maxCount: number = 4;
</script>

<Stack class={$$restProps.class} gap="8" align="center">
	<!-- TODO: i18n -->
	<Text role="secondary">{maxCount} из {users.length}</Text>
	{#each users.slice(0, maxCount) as user (user.meta.id)}
		<Avatar size={25} src={user.meta.photoLink} />
	{/each}
</Stack>
