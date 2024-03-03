import { PUBLIC_API } from '$env/static/public';

export const apiEventSource = new EventSource(
	PUBLIC_API + '/sse/connect/' + new URL(location.href).searchParams.get('userId'),
);
