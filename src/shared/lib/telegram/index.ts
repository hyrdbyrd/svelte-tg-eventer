import { afterUpdate } from 'svelte';

import { goToMain } from '../navigate';

export function getTelegram(): typeof Telegram.WebApp {
	return Telegram.WebApp;
}

export function showBackButton() {
	const tg = getTelegram();

	afterUpdate(() => {
		tg.BackButton.show();

		const onBack = () => goToMain();
		tg.BackButton.onClick(onBack);
		return () => tg.BackButton.offClick(onBack);
	});
}

export function hideBackButton() {
	const tg = getTelegram();

	tg.BackButton.hide();
}
