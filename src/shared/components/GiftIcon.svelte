<script lang="ts">
	import { getTelegram } from '../lib/telegram';

	const tg = getTelegram();
</script>

<svg width="16" height="16" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
	<path
		stroke={tg.themeParams.hint_color}
		stroke-linecap="round"
		stroke-linejoin="round"
		d="M15.4001 9V17H2.6001V9"
	/>
	<path
		stroke={tg.themeParams.hint_color}
		d="M17 5H1V9H17V5Z"
		stroke-linecap="round"
		stroke-linejoin="round"
	/>
	<path
		d="M9 17V5"
		stroke={tg.themeParams.hint_color}
		stroke-linecap="round"
		stroke-linejoin="round"
	/>
	<path
		stroke={tg.themeParams.hint_color}
		stroke-linecap="round"
		stroke-linejoin="round"
		d="M8.9999 5H5.3999C4.86947 5 4.36076 4.78929 3.98569 4.41421C3.61062 4.03914 3.3999 3.53043 3.3999 3C3.3999 2.46957 3.61062 1.96086 3.98569 1.58579C4.36076 1.21071 4.86947 1 5.3999 1C8.1999 1 8.9999 5 8.9999 5Z"
	/>
	<path
		stroke={tg.themeParams.hint_color}
		stroke-linecap="round"
		stroke-linejoin="round"
		d="M9 5H12.6C13.1304 5 13.6391 4.78929 14.0142 4.41421C14.3893 4.03914 14.6 3.53043 14.6 3C14.6 2.46957 14.3893 1.96086 14.0142 1.58579C13.6391 1.21071 13.1304 1 12.6 1C9.8 1 9 5 9 5Z"
	/>
</svg>
