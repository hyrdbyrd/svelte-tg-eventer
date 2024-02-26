import { base } from '$app/paths';
import { redirect } from '@sveltejs/kit';

export function load({ url }) {
	const searchParams = [...url.searchParams.entries()].reduce<Record<string, string>>(
		(acc, [key, value]) => ((acc[key] = value), acc),
		{},
	);

	if (!searchParams.eventId) redirect(308, '404');

	const nextUrl = new URL(url);

	switch (searchParams.type) {
		case 'rating':
			nextUrl.pathname = base + '/history';
			break;

		case 'fastmeeting':
			if (!searchParams.meetingId) break;
			nextUrl.pathname = base + '/meeting';
			break;

		case 'request':
		default:
			return;
	}

	return redirect(300, nextUrl);
}
