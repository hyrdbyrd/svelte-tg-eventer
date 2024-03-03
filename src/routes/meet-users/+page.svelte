<script lang="ts">
	import { page } from '$app/stores';

	import { allMeetings } from '@/features/meeting';
	import { users, UsersList } from '@/features/user';

	let meetingId = $page.url.searchParams.get('meetingId')!;

	$: meeting = $allMeetings.find((meet) => String(meet.id) === meetingId);
	$: meetUsers = $users.filter((user) => meeting?.userIds?.includes(user.meta.id));
</script>

<UsersList users={meetUsers} />
