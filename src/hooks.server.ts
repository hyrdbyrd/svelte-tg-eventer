export function handle({ event, resolve }) {
	return resolve(event, {
		// TODO: logic (ru -> dynamic)
		transformPageChunk: ({ html }) => html.replace('%lang%', 'ru')
	});
}
