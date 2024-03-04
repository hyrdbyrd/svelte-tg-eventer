<script lang="ts">
	import { getTelegram } from "../lib/telegram";

    const tg = getTelegram();

    export let width = 110;
    export let height = 110;
</script>

<svg {width} {height} viewBox="0 0 118 118" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle
        r="53.3652"
        cx="58.6686"
        cy="59.3315"
        fill={tg.themeParams.hint_color}
    />
    <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        fill={tg.themeParams.bg_color}
        d="M15.1072 98.204C17.0166 86.6421 35.0415 77.5778 56.9953 77.5778C80.2219 77.5778 99.0507 87.7234 99.0507 100.239C99.0507 100.783 99.015 101.324 98.9449 101.859C88.4182 111.622 74.3225 117.592 58.8326 117.592C41.4938 117.592 25.9019 110.112 15.1072 98.204Z"
    />
    <circle
        r="19.1903"
        cx="59.2042"
        cy="43.6886"
        fill={tg.themeParams.bg_color}
    />
    <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        fill={tg.themeParams.bg_color}
        d="M59 118C91.5848 118 118 91.5848 118 59C118 26.4152 91.5848 0 59 0C26.4152 0 0 26.4152 0 59C0 91.5848 26.4152 118 59 118ZM58.6686 112.697C88.1414 112.697 112.034 88.8042 112.034 59.3315C112.034 29.8587 88.1414 5.96628 58.6686 5.96628C29.1958 5.96628 5.30344 29.8587 5.30344 59.3315C5.30344 88.8042 29.1958 112.697 58.6686 112.697Z"
    />
</svg>
