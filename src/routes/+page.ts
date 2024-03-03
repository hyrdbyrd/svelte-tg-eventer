import { base } from '$app/paths';
import { redirect } from '@sveltejs/kit';

import { browser } from '$app/environment';

export async function load({ url }) {
	if (!browser) return;

	const searchParams = [...url.searchParams.entries()].reduce<Record<string, string>>(
		(acc, [key, value]) => ((acc[key] = value), acc),
		{},
	);

	if (!searchParams.eventId || !searchParams.userId) redirect(308, '404');

	const { getUser } = await import('@/entities/user');

	const currentUser = await getUser(searchParams.eventId, searchParams.userId);
	if (!currentUser) searchParams.type = 'register';

	const nextUrl = new URL(url);

	switch (searchParams.type) {
		case 'register':
			nextUrl.pathname = base + '/register';
			break;

		case 'rating':
			nextUrl.pathname = base + '/history';
			break;

		case 'fastmeeting':
			if (!searchParams.meetingId) break;
			nextUrl.pathname = base + '/meeting';
			break;

		case 'raffle':
			nextUrl.pathname = base + '/raffle';
			break;

		case 'request':
		default:
			return;
	}

	return redirect(300, nextUrl);
}
