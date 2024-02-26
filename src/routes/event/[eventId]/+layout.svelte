<script lang="ts">
    import { afterUpdate } from 'svelte';

    import { page } from '$app/stores';
    import { goto } from '$app/navigation';

    import { getAllUsersFx, getUserFx } from '@/features/user';
    import {
        getUserMeetingsFx,
        fastMeetingUserFound,
        getEndedUserMeetingsFx,
        getAvailableCustomMeetingsFx,
    } from '@/features/meeting';

	import { goFromMain } from '@/shared/lib';
    import { showBackButton, hideBackButton } from '@/shared/lib';

    let eventId = $page.params.eventId;
    let userId = $page.url.searchParams.get('userId')!;

    // Подгружаем всех пользователей
    getAllUsersFx(eventId);
    getUserFx({ eventId, userId });

    // Подгружаем встречи
    getAvailableCustomMeetingsFx(eventId);
    getUserMeetingsFx({ eventId, userId });
    getEndedUserMeetingsFx({ eventId, userId });

    // Слушаем событие "Собеседник найден"
    afterUpdate(() =>
        fastMeetingUserFound.watch((data) => goFromMain(`meeting/${data.id}`))
    );

    $: {
        if (/\[eventId\]$/.test($page.route.id || '')) hideBackButton();
        else showBackButton();
    }
</script>

<slot />
