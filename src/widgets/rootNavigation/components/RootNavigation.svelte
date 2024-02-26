<script lang="ts">
	import { goFromMain } from '@/shared/lib';
    import Section from "@/shared/components/Section.svelte";
	import ClockIcon from '@/shared/components/ClockIcon.svelte';
    import ProfileIcon from '@/shared/components/ProfileIcon.svelte';
	import Menu, { type MenuItemType } from '@/shared/components/Menu.svelte';

    import { endedMeetings } from '@/features/meeting';

    // TODO: i18n
    let menu: MenuItemType[] = [
        { icon: ProfileIcon, text: 'Анкета', onClick: goFromMain.bind(null, 'profile') },
        { icon: ClockIcon, text: 'Участники', onClick: goFromMain.bind(null, 'users') },
        { icon: ClockIcon, text: 'История', onClick: goFromMain.bind(null, 'history'), pin: $endedMeetings.filter(meeting => meeting.rate).length },
    ];
</script>

<!-- TODO: i18n -->
<Section type="main" title="Подробности">
    <Menu items={menu} />
</Section>
