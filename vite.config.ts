import { config } from 'dotenv';
import { defineConfig } from 'vite';
import { ngrok } from 'vite-plugin-ngrok';
import { sveltekit } from '@sveltejs/kit/vite';

config();

function getPort(): number {
	const port = Number(process.env.PORT);
	if (isNaN(port)) return 3234;
	return port;
}

export default defineConfig(({ command }) => {
	if (command === 'build') {
		return {
			plugins: [sveltekit()]
		};
	}

	return {
		plugins: [
			sveltekit(),
			ngrok({
				port: getPort(),
				host: `https://localhost:${getPort()}`,
				authtoken: process.env.NGROK_AUTHTOKEN,
				domain: process.env.PUBLIC_STATIC_DOMAIN
			})
		],
		server: {
			host: true,
			// TODO: logic (creds, origin, PUBLIC_API)
			cors: false,
			port: getPort()
		}
	};
});
