<script lang="ts">
	import { onMount } from 'svelte';

	import { page } from '$app/stores';

	import { getAllUsersFx, users } from '@/stores/users';

	import User from '@/components/User.svelte';
	import VirtualList from '@/components/VirtualList.svelte';

	getAllUsersFx($page.params.eventId);

	// TODO: prettify (aka react-hooks)
	let listHeight = 0;
	let wrapper: HTMLElement;

	onMount(() => {
		listHeight = wrapper.parentElement?.offsetHeight || 0;
	});

	$: console.log($users);
</script>

<users-wrapper bind:this={wrapper}>
	<VirtualList items={$users} itemHeight={50} let:item={user} height="{listHeight - 10}px">
		<User name={user.meta.userName} src={user.meta.photoLink || ''} />
	</VirtualList>
</users-wrapper>

<style>
	users-wrapper {
		display: block;
		padding-top: 10px;
	}
</style>
