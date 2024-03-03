<script lang="ts">
	import Text from '@/shared/components/Text.svelte';
	import Stack from '@/shared/components/Stack.svelte';

	import type { User } from '@/entities/user';

	import { UserAvatar } from '@/features/user';

	export let users: User[] = [];
	export let maxCount: Nil<number> = null;
</script>

<!-- TODO: i18n -->
<Stack class={$$restProps.class} gap="8" align="center">
	{#if maxCount}
		<Text role="secondary">{users.length} из {maxCount}</Text>
	{/if}
	{#each users.slice(0, 3) as user (user.meta.id)}
		<UserAvatar {user} />
	{/each}
</Stack>
