<script lang="ts">
	import { getTelegram } from "../lib";

    const tg = getTelegram();
</script>

<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="8" cy="8" r="7.5" stroke={tg.themeParams.hint_color}/>
    <path d="M3.5 8.5L6.32843 11.3284" stroke={tg.themeParams.hint_color} stroke-linecap="round"/>
    <path d="M6.5 11.1569L12.1569 5.50001" stroke={tg.themeParams.hint_color} stroke-linecap="round"/>
</svg>
