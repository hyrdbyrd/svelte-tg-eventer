<script lang="ts">
	import Avatar from '@/shared/components/Avatar.svelte';

	import type { User } from '@/entities/user';

	export let user: User;
	export let size: number = 40;
</script>

<Avatar src={user?.meta.photoLink} {size} />
