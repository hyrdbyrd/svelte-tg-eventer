import { PUBLIC_API } from '$env/static/public';

const searchParams = new URL(location.href).searchParams;

export const apiEventSource = new EventSource(
	PUBLIC_API + '/sse/connect/' + searchParams.get('userId'),
);
