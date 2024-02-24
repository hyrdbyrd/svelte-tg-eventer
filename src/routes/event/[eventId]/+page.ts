export const prerender = true;

export const ssr = false;

export function load({ params }) {
	return {
		params,
		meta: {
			// TODO: i18n
			title: 'Joja',
			description: 'Настройте параметры своейго профиля'
		}
	};
}
