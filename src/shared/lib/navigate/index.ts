import { goto } from '$app/navigation';

export function goFromMain(url: string = '') {
	const nextUrl = new URL(location.href);
	nextUrl.pathname = nextUrl.pathname.replace(
		/(\/event\/\d+)(\/.*)?$/,
		`$1/${url.startsWith('/') ? url.slice(1) : url}`,
	);

	return goto(nextUrl);
}

export function goToMain() {
	return goFromMain();
}
