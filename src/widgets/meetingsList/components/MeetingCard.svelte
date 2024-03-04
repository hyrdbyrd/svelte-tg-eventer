<script lang="ts">
	import { compact } from '@/shared/lib/stdlib';
	import Text from '@/shared/components/Text.svelte';
	import Stack from '@/shared/components/Stack.svelte';
	import Rating from '@/shared/components/Rating.svelte';

	import type { Meeting } from '@/entities/meeting';

	import { users, findUserById } from '@/features/user';

	import Capacity from './Capacity.svelte';

	export let meeting: Meeting;

	let { rate, capacity } = meeting;

	$: userIds = meeting.userIds || [];
	$: queueType = meeting.queueType;
	$: name = meeting.name || usersInMeeting.map((user) => user.meta.userName).join(' ');

	$: usersInMeeting = compact(userIds.map((id) => findUserById(id, $users)) || []);
</script>

<!-- TODO: i18n -->
<Stack wide gap="8" direction="vertical">
	<Stack wide gap="4" justify="between" align="start">
		<Text role="main">{name}</Text>
	</Stack>
	<Stack wide gap="4" justify="between" align="end">
		<Capacity users={usersInMeeting} maxCount={capacity} />
		{#if queueType === 'ENDED'}
			{#if typeof rate === 'number' && rate !== -1}
				<Rating {rate} />
			{:else if meeting.status === 'REJECTED'}
				<Text role="destructive" as="div" truncate={false}>Запрос отклонен</Text>
			{:else if rate !== -1}
				<Text role="accent" as="div" truncate={false}>Оцените встречу</Text>
			{/if}
		{:else if meeting.status === 'AWAITING_RESPONSE'}
			<Text role="main" as="div" truncate={false}>Запрос</Text>
		{/if}
	</Stack>
</Stack>
