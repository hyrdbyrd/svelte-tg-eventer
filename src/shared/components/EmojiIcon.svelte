<script lang="ts" context="module">
    export type EmojiType = 'congrats' | 'cloud' | 'ticket';
</script>

<script lang="ts">
    import { assets } from '$app/paths';

    export let emoji: EmojiType;

    let src = ({
        cloud: `${assets}/cloud-emoji.webp`,
        ticket: `${assets}/ticket-emoji.webp`,
        congrats: `${assets}/congrats-emoji.webp`,
    })[emoji];
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<img {src} width="120px" loading="lazy" />

<style>
    img {
        width: 120px;
        height: 100%;
        height: auto;
        max-width: 100%;
    }
</style>
