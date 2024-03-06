<script lang="ts">
	import { onMount } from 'svelte';

    import { base } from '$app/paths';
    import { page } from '$app/stores';
    import { goToMain } from '../navigate';

    import { getTelegram } from './helpers';

    const tg = getTelegram();

    let basePath = base.endsWith('/')
        ? base
        : `${base}/`;

    function onBack() {
        if (history.length > 2) history.back();
        else goToMain();
    }

    onMount(() => {
        tg.BackButton.onClick(onBack);
        return () => tg.BackButton.offClick(onBack);
    });

    $: {
        if (
            // Для формы регистрации кнопку "назад" нужно прятать
            $page.url.pathname.includes('register') ||
            $page.url.pathname === basePath
        )
            tg.BackButton.hide();
        else tg.BackButton.show();
    }
</script>
