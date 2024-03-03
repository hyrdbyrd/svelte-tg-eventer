<script lang="ts">
	import { page } from '$app/stores';

	import Button from '@/shared/components/Button.svelte';

	import { UserInfo } from '@/widgets/userInfo';

	import { Footer } from '@/features/footer';

	import { users } from '@/features/user';
	import { sendMeetingRequestFx, isRequestAlredyExistFx } from '@/features/meeting';

	let userId = $page.url.searchParams.get('userId')!;
	let eventId = $page.url.searchParams.get('eventId')!;
	let userForId = $page.url.searchParams.get('userForId')!;

	let isLoading = false;

	$: hereUser = $users.find((user) => String(user.meta.id) === userForId)!;

	let isRequestAlredyExist: Promise<boolean> | boolean = isRequestAlredyExistFx({
		eventId,
		userFromId: userId,
		userToId: userForId,
	});

	function requestMeeting() {
		isLoading = true;
		sendMeetingRequestFx({ eventId, userFromId: userId, userToId: userForId })
			.then(() => (isRequestAlredyExist = true))
			.finally(() => (isLoading = true));
	}
</script>

<!-- TODO: i18n -->

{#if hereUser}
	<UserInfo user={hereUser} />

	{#await isRequestAlredyExist then isExist}
		<Footer>
			<Button wide disabled={isExist} on:click={requestMeeting}>
				{isExist ? 'Запрос отправлен' : 'Запросить встречу'}
			</Button>
		</Footer>
	{/await}
{/if}
