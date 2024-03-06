import { base } from '$app/paths';
import { redirect } from '@sveltejs/kit';

export async function load({ url }) {
	const searchParams = [...url.searchParams.entries()].reduce<Record<string, string>>(
		(acc, [key, value]) => ((acc[key] = value), acc),
		{},
	);

	console.log('called');

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
			if (searchParams.meetingId) nextUrl.pathname = base + '/meeting';
			else nextUrl.pathname = base + '/history';
			break;

		case 'request':
		case 'fastmeeting':
			if (!searchParams.meetingId) break;
			nextUrl.pathname = base + '/meeting';
			break;

		case 'giveaway':
			nextUrl.pathname = base + '/raffle';
			break;

		default:
			return;
	}

	nextUrl.searchParams.delete('type');

	return redirect(300, nextUrl);
}
