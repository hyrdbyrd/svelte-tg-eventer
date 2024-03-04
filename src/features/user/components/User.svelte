<script lang="ts">
	import { onMount } from 'svelte';

	import { page } from '$app/stores';

	import Text from '@/shared/components/Text.svelte';
	import Stack from '@/shared/components/Stack.svelte';
	import Avatar from '@/shared/components/Avatar.svelte';
	import Section from '@/shared/components/Section.svelte';

	import type { User as UserType } from '@/entities/user';
	import { goFromMain } from '@/shared/lib/navigate';

	export let user: UserType;

	$: name = user.meta.userName;
	$: src = user.meta.photoLink;
	$: isCurrent = String(user.meta.id) === $page.url.searchParams.get('userId');

	// TODO: prettify (aka react-hooks)
	let maxWidth = 0;
	let wrapper: HTMLElement;

	onMount(() => {
		const el = wrapper?.parentElement;
		if (!el) return;

		maxWidth = el.offsetWidth || 0;
	});

	function handleClick() {
		if (isCurrent) goFromMain('/profile');
		else goFromMain('/user', { userForId: user.meta.id });
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<svelte-wrapper bind:this={wrapper} on:click={handleClick}>
	<Section class={$$restProps.class}>
		<Stack gap="10" align="center">
			<user-avatar>
				<Avatar {src} />
			</user-avatar>
			<user-content style:max-width={`${maxWidth - 80}px`}>
				<Stack direction="vertical">
					<Text role="main">{name}</Text>
					<!-- TODO: i18n -->
					<Text role="secondary" truncate={!isCurrent}>
						{#if isCurrent}
							Это вы
						{:else}
							{user.meta.description}
						{/if}
					</Text>
				</Stack>
			</user-content>
		</Stack>
	</Section>
</svelte-wrapper>

<style>
	svelte-wrapper {
		cursor: pointer;
	}

	svelte-wrapper, user-content, user-avatar {
		display: block;
	}

	user-avatar {
		min-width: 40px;
	}
</style>
