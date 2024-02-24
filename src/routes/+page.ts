import { redirect } from '@sveltejs/kit';

export const prerender = true;

export const ssr = false;

export function load({ url }) {
	if (url.searchParams.has('eventId')) {
		const nextUrl = new URL(url);
		nextUrl.pathname += `event/${url.searchParams.get('eventId')}`;

		return redirect(300, nextUrl);
	}

	return {
		meta: {
			// TODO: i18n
			title: 'Анкета',
			description: 'Описание'
		}
	};
}
