<script lang="ts">
	import Star from './Star.svelte';
	import Stack from './Stack.svelte';

	export let rate: number = 0;

	$: stars = Array.from({ length: 5 }).map((_, i) => i >= rate);
</script>

<Stack class={$$restProps.class} gap="2">
	{#each stars as filled}
		<Star {filled} />
	{/each}
</Stack>
