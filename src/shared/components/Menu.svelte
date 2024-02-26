<script lang="ts" context="module">
	import type { ComponentType } from 'svelte';

    export type MenuItemType = {
        text: string;
        pin?: Nil<number>;
        onClick: () => void;
        icon: ComponentType;
        isDestuctive?: Nil<boolean>;
    }
</script>

<script lang="ts">
	import Text from '@/shared/components/Text.svelte';
	import Bullet from '@/shared/components/Bullet.svelte';
	import MenuItem from '@/shared/components/MenuItem.svelte';

    export let items: MenuItemType[];
</script>

<!-- TODO: i18n -->
{#each items as item}
    <MenuItem on:click={item.onClick}>
        <svelte:component this={item.icon} slot="icon" />
        <Text slot="title" role={item.isDestuctive ? 'destructive' : 'main'}>
            {item.text}
        </Text>
        <Bullet slot="after">
            {item.pin}
        </Bullet>
    </MenuItem>
{/each}
