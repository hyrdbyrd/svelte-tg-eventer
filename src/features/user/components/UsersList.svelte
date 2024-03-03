<script lang="ts">
	import { onMount } from 'svelte';

	import Section from '@/shared/components/Section.svelte';
	import VirtualList from '@/shared/components/VirtualList.svelte';

	import type { User as UserType } from '@/entities/user';

	import User from './User.svelte';
	import { page } from '$app/stores';

	export let users: UserType[];

	// TODO: prettify (aka react-hooks)
	let listHeight = 0;
	let wrapper: HTMLElement;

	onMount(() => {
		listHeight = wrapper.parentElement?.offsetHeight || 0;
	});
</script>

<div bind:this={wrapper}>
	<Section type="main">
		<VirtualList items={users} let:item={user} height="{listHeight - 10}px">
			<User
				userId={user.meta.id}
				name={user.meta.userName}
				src={user.meta.photoLink || ''}
				isCurrent={String(user.meta.id) === $page.url.searchParams.get('userId')}
			/>
		</VirtualList>
	</Section>
</div>
