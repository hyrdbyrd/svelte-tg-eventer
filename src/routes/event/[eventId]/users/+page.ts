export const prerender = true;

export const ssr = false;

export function load() {
	return {
		meta: {
			// TODO: i18n
			title: 'Участники',
			description: 'Страничка участников'
		}
	};
}
