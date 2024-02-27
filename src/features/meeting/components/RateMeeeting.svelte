<script lang="ts">
    import Star from '@/shared/components/Star.svelte';
	import Stack from '@/shared/components/Stack.svelte';

    export let currentRate: number;

    let rates = Array.from({ length: 5 }).map((_, i) => i);

    function handleRate(rate: number) {
        currentRate = rate + 1;
    }
</script>

<rate-meeting>
    <Stack gap="4">
        {#each rates as rate}
            <Star filled={rate >= currentRate} size={40} on:click={() => handleRate(rate)} />
        {/each}
    </Stack>
</rate-meeting>

<style>
    rate-meeting {
        cursor: pointer;

        display: flex;
        align-items: center;
        justify-content: center;

        width: 100%;
    }
</style>
