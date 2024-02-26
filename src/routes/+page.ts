import { redirect } from '@sveltejs/kit';

export function load({ url }) {
	const searchParams = [...url.searchParams.entries()].reduce<Record<string, string>>(
		(acc, [key, value]) => ((acc[key] = value), acc),
		{},
	);

	if (!searchParams.eventId) redirect(308, '404');

	const nextUrl = new URL(url);
	nextUrl.pathname += `event/${searchParams.eventId}`;

	switch (searchParams.type) {
		case 'rating':
			nextUrl.pathname += 'history';
			break;

		case 'fastmeeting':
			if (!searchParams.meetingId) break;
			nextUrl.pathname += `meeting/${searchParams.meetingId}`;
			break;

		case 'request':
		default:
			break;
	}

	return redirect(300, nextUrl);
}
