import { base } from '$app/paths';
import { goto } from '$app/navigation';

export function goFromMain(url: string = '', params: Record<string, string | number> = {}) {
	const nextUrl = new URL(location.href);
	nextUrl.pathname = base + (url.startsWith('/') ? url : `/${url}`);

	nextUrl.searchParams.delete('no_back');
	for (const [key, value] of Object.entries(params)) nextUrl.searchParams.set(key, String(value));

	return goto(nextUrl);
}

export function goToMain(params: Record<string, string | number> = {}) {
	return goFromMain('', params);
}
