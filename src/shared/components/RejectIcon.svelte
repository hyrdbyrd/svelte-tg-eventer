<script lang="ts">
	import { getTelegram } from "../lib";

    const tg = getTelegram();
</script>

<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="8" cy="8" r="7.5" stroke={tg.themeParams.hint_color}/>
    <path d="M4.5 4.5L11.5711 11.5711" stroke={tg.themeParams.hint_color} stroke-linecap="round"/>
    <path d="M4.5 11.571L11.5711 4.49998" stroke={tg.themeParams.hint_color} stroke-linecap="round"/>
</svg>
