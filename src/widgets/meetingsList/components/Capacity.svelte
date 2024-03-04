<script lang="ts">
	import Text from '@/shared/components/Text.svelte';
	import Stack from '@/shared/components/Stack.svelte';

	import type { User } from '@/entities/user';

	import { UserAvatar } from '@/features/user';
	import UserAvatarsStub from '@/shared/components/UserAvatarsStub.svelte';

	export let users: User[] = [];
	export let maxCount: Nil<number> = null;

	$: overcupCount = users.length - 3 < 0 ? 0 : users.length - 3;
</script>

<!-- TODO: i18n -->
<Stack class={$$restProps.class} gap="8" align="center">
	{#if maxCount}
		<Text role="secondary" truncate={false}>{users.length} из {maxCount}</Text>
	{/if}
	{#each users.slice(0, 3) as user (user.meta.id)}
		<UserAvatar {user} />
	{/each}
	{#if overcupCount}
		<UserAvatarsStub color="secondary" count={overcupCount} />
	{/if}
</Stack>
