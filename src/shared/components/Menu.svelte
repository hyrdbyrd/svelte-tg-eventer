<script lang="ts" context="module">
	import type { ComponentType } from 'svelte';

	export type MenuItemType = {
		text: string;
		onClick: () => void;
		icon: ComponentType;
		pin?: Nil<number> | boolean;
		isDestuctive?: Nil<boolean>;
	};
</script>

<script lang="ts">
	import Text from './Text.svelte';
	import Bullet from './Bullet.svelte';
	import MenuItem from './MenuItem.svelte';

	export let items: MenuItemType[];
</script>

<!-- TODO: i18n -->
{#each items as item}
	<MenuItem on:click={item.onClick}>
		<svelte:component this={item.icon} slot="icon" />
		<Text slot="title" role={item.isDestuctive ? 'destructive' : 'main'}>
			{item.text}
		</Text>
		<Bullet value={item.pin} slot="after" />
	</MenuItem>
{/each}
