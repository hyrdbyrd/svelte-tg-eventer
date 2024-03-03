<script lang="ts">
    import cn from 'classnames';

    export let count: number;
    export let size: number = 40;

    export let color: 'main' | 'secondary' = 'main';

    $: width = `${size}px`;
    $: height = `${size}px`;
</script>

<user-avatars-stub
    style:width
	style:height
    class={cn($$restProps.class, color)}
>
    +{count}
</user-avatars-stub>

<style>
	user-avatars-stub {
        display: flex;
        align-items: center;
        justify-content: center;

        border-radius: 100%;
	}

    .main {
        background-color: var(--bg-main-color);
    }

    .secondary {
        background-color: var(--bg-secondary-color);
    }
</style>
