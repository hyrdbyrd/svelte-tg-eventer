<script lang="ts">
	import { onMount } from 'svelte';

	import AvatarStubIcon from './AvatarStubIcon.svelte';

	export let alt: string = 'Avatar';
	export let src: string | undefined;

	export let size: number = 40;

	export let width: string = `${size}px`;
	export let height: string = `${size}px`;

	let loading = true;
	let errored = false;

	let mounted = false;
	onMount(() => {
		mounted = true;
	})
</script>

{#if mounted}
	{#if errored || !src}
		<AvatarStubIcon width={size} height={size} />
	{:else}
		<img
			{alt}
			{src}
			style:width
			style:height
			class:loading
			on:error={() => errored = true}
			on:load={(ev) => {
				loading = false;
				if ((ev.status || 0) >= 400) (errored = true)
			}}
		/>
	{/if}
{/if}

<style>
	.loading {
		display: none;
	}

	img {
		object-fit: cover;
		border-radius: 100%;
	}
</style>
