<script lang="ts">
    import { base } from '$app/paths';
    import { page } from '$app/stores';
	import { onMount } from 'svelte';

    import { goToMain } from '../navigate';

    import { getTelegram } from './helpers';

    const tg = getTelegram();

    function onBack() {
        goToMain();
    }

    onMount(() => {
        tg.BackButton.onClick(onBack);
        return () => tg.BackButton.offClick(onBack);
    });

    $: {
        if (
            $page.url.pathname.includes('register') ||
            $page.url.pathname === (base.endsWith('/') ? base : `${base}/`)
        )
            tg.BackButton.hide();
        else tg.BackButton.show();
    }
</script>
