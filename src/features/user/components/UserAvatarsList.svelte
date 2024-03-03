<script lang="ts">
	import type { User } from '@/entities/user';
	import UserAvatar from './UserAvatar.svelte';

	export let users: User[] = [];
</script>

{#if users.length}
	<user-avatars>
		{#each users.slice(0, 2) as user, idx (user.meta.id)}
			<user-avatar-border style:z-index={idx}>
				<UserAvatar {user} size={110} />
			</user-avatar-border>
		{/each}
	</user-avatars>
{/if}

<style>
	user-avatars {
		display: flex;
		padding: 10px;
		align-items: center;
		justify-content: center;
	}

	user-avatar-border:not(:first-child) {
		padding: 5px;
		display: block;
		border-radius: 100%;
		background: var(--bg-secondary-color);
	}
</style>
