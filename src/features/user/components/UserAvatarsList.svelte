<script lang="ts">
	import UserAvatarsStub from '@/shared/components/UserAvatarsStub.svelte';

	import type { User } from '@/entities/user';

	import UserAvatar from './UserAvatar.svelte';

	export let users: User[] = [];

	$: overcupCount = users.length - 3 < 0 ? 0 : users.length - 3;
</script>

{#if users.length}
	<user-avatars>
		{#each users.slice(0, 3) as user, idx (user.meta.id)}
			<user-avatar-border style:z-index={idx + 1}>
				<UserAvatar {user} size={110} />
			</user-avatar-border>
		{/each}
		{#if overcupCount}
			<user-avatar-border style:z-index={1000}>
				<UserAvatarsStub color="main" count={overcupCount} size={110} />
			</user-avatar-border>
		{/if}
	</user-avatars>
{/if}

<style>
	user-avatars {
		display: flex;
		padding: 10px;
		align-items: center;
		justify-content: center;
		position: relative;
	}

	user-avatar-border:not(:first-child) {
		margin-left: -60px;
		padding: 5px;
		display: block;
		border-radius: 100%;
		background: var(--bg-secondary-color);
	}
</style>
