<script lang="ts" context="module">
	const STATIC_SRC = 'https://avatars.mds.yandex.net/get-yapic/0/0-0/islands-34';
</script>

<script lang="ts">
	import { browser } from '$app/environment';

	export let alt: string = 'Avatar';
	export let src: string | undefined;

	export let size: number = 40;

	export let width: string = `${size}px`;
	export let height: string = `${size}px`;
</script>

<!-- Фиксим ssr -->
{#if browser}
	<img
		{alt}
		style:width
		style:height
		src={src || STATIC_SRC}
		class={$$restProps.class}
		on:error={() => (src = STATIC_SRC)}
	/>
{/if}

<style>
	img {
		object-fit: cover;
		border-radius: 100%;
	}
</style>
