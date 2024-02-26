<script lang="ts">
	import { compact } from '@/shared/lib';

	import Text from '@/shared/components/Text.svelte';
	import Stack from '@/shared/components/Stack.svelte';
	import Rating from '@/shared/components/Rating.svelte';

	import type { Meeting } from '@/entities/meeting';

	import { users, findUserById } from '@/features/user';

    import Capacity from './Capacity.svelte';

    export let meeting: Meeting;

    let {
        name,
        rate,
        capacity,
        userIds = [],
    } = meeting;

    let usersInMeeting = compact(userIds!.map(id => findUserById(id, $users)));

    $: {
        if (name === null) {
            name = usersInMeeting
                .map(user => user.meta.userName)
                .join(' ');
        }
    }
</script>

<Stack wide gap="8" direction="vertical">
	<Stack wide gap="4" justify="between" align="start">
		<Text role="main">{name}</Text>
	</Stack>
	<Stack wide gap="4" justify="between" align="center">
        <Capacity users={usersInMeeting} maxCount={capacity} />
		{#if typeof rate === 'number'}
			<Rating {rate} />
		{/if}
	</Stack>
</Stack>
