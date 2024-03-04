<script lang="ts">
	import { page } from '$app/stores';

	import Button from '@/shared/components/Button.svelte';

	import { SendMeetingRequestStatus } from '@/entities/meeting';

	import { UserInfo } from '@/widgets/userInfo';

	import { users } from '@/features/user';
	import { Footer } from '@/features/footer';
	import { sendMeetingRequestFx, canSendMeetingRequestFx } from '@/features/meeting';

	let userId = $page.url.searchParams.get('userId')!;
	let eventId = $page.url.searchParams.get('eventId')!;
	let userForId = $page.url.searchParams.get('userForId')!;

	let isLoading = false;

	$: hereUser = $users.find((user) => String(user.meta.id) === userForId)!;

	let isRequestAlredyExist: Promise<SendMeetingRequestStatus> | SendMeetingRequestStatus =
		canSendMeetingRequestFx({
			eventId,
			userFromId: userId,
			userToId: userForId,
		});

	function requestMeeting() {
		isLoading = true;
		sendMeetingRequestFx({ eventId, userFromId: userId, userToId: userForId })
			.then(() => (isRequestAlredyExist = 'ALREADY_EXIST'))
			.finally(() => (isLoading = true));
	}
</script>

<!-- TODO: i18n -->

{#if hereUser}
	<UserInfo user={hereUser} />

	{#await isRequestAlredyExist then status}
		<Footer>
			<Button wide disabled={status !== 'NOT_EXIST' || isLoading} on:click={requestMeeting}>
				{status !== 'NOT_EXIST' ? 'Запрос отправлен' : 'Запросить встречу'}
			</Button>
		</Footer>
	{/await}
{/if}
