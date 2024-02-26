<script lang="ts">
    export let value: Nil<number> = null;
</script>

{#if value}
    <svelte-bullet>
        <svelte-bullet-body>
            {value}
        </svelte-bullet-body>
    </svelte-bullet>
{/if}

<style>
    svelte-bullet {
        position: relative;

        display: flex;
        align-items: center;
        justify-content: center;

        width: 15px;
        height: 15px;

        border-radius: 100%;

        color: var(--button-text-color);
        background-color: var(--button-main-color);
    }

    svelte-bullet-body {
        position: absolute;
    }
</style>
