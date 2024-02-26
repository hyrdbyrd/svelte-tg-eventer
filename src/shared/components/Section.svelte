<script lang="ts">
    import cn from 'classnames';
	import Text from './Text.svelte';

    export let type: 'main' | 'inner' = 'inner';
    export let title: string | undefined = undefined;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<section on:click class={cn(type, $$restProps.class)}>
    {#if title}
        <section-title>
            <Text role="accent" bold>
                {title}
            </Text>
        </section-title>
    {/if}
    <slot />
</section>

<style>
    section-title {
        display: block;
        padding: 20px 20px 5px;
        background-color: var(--section-bg-color);
    }

    .main {
        border-top: 10px solid var(--bg-secondary-color);
    }

    .inner {
        padding: 10px 20px;
        background-color: var(--section-bg-color);
        border-bottom: 2px solid var(--bg-secondary-color);
    }
</style>
