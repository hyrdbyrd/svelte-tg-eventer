<script lang="ts">
	import { compact } from '@/shared/lib/stdlib';
	import { goFromMain } from '@/shared/lib/navigate';
	import Section from '@/shared/components/Section.svelte';
	import GiftIcon from '@/shared/components/GiftIcon.svelte';
	import UsersIcon from '@/shared/components/UsersIcon.svelte';
	import ClockIcon from '@/shared/components/ClockIcon.svelte';
	import ProfileIcon from '@/shared/components/ProfileIcon.svelte';
	import Menu, { type MenuItemType } from '@/shared/components/Menu.svelte';

	import { users } from '@/features/user';
	import { event } from '@/features/event';
	import { raffle } from '@/features/raffle';
	import { endedMeetings } from '@/features/meeting';

	let features = $event.features;

	// TODO: i18n
	let menu: MenuItemType[] = compact([
		{ icon: ProfileIcon, text: 'Анкета', onClick: goFromMain.bind(null, 'profile') },
		$users.length && {
			icon: UsersIcon,
			text: features.includes('IS_CUSTOM_MEETINGS_ALLOWED')
				? 'Участники'
				: 'Отправить запрос',
			onClick: goFromMain.bind(null, 'users'),
		},
		features.includes('IS_RUFFLE_ALLOWED') && {
			icon: GiftIcon,
			text: 'Розыгрыш',
			pin: !$raffle.isUserSeen,
			onClick: goFromMain.bind(null, 'raffle'),
		},
		$endedMeetings.length && {
			icon: ClockIcon,
			text: 'История',
			onClick: goFromMain.bind(null, 'history'),
			pin: $endedMeetings.filter((meeting) => !meeting.rate && meeting.rate !== -1 && meeting.status !== 'REJECTED').length,
		},
	]);
</script>

<!-- TODO: i18n -->
<Section type="main" title="Подробности">
	<Menu items={menu} />
</Section>
