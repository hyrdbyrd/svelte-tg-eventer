<script lang="ts">
	import { getTelegram } from '../lib/telegram';

	const tg = getTelegram();

	export let size: number = 20;
	export let filled: boolean = false;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<svg
	on:click
	fill="none"
	width={size}
	height={size}
	viewBox="0 0 20 20"
	xmlns="http://www.w3.org/2000/svg"
>
	<path
		fill={filled ? tg.themeParams.hint_color : '#EFAB39'}
		d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z"
	/>
</svg>
