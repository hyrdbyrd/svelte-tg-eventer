import { afterUpdate } from 'svelte';

import { goToMain } from '../navigate';

export function getTelegram(): typeof Telegram.WebApp {
	return Telegram.WebApp;
}

export function showBackButton() {
	const tg = getTelegram();

	function handleShow() {
		tg.BackButton.show();

		const onBack = () => goToMain();
		tg.BackButton.onClick(onBack);
		return () => tg.BackButton.offClick(onBack);
	}

	afterUpdate(handleShow);
}

export function hideBackButton() {
	const tg = getTelegram();

	function handleHide() {
		tg.BackButton.hide();
	}

	afterUpdate(handleHide);
}
