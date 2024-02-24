import { join } from 'node:path';
import { readFileSync } from 'node:fs';

import { config } from 'dotenv';
import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';

config();

function getPort(): number {
	const port = Number(process.env.PORT);
	if (isNaN(port)) return 3234;
	return port;
}

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		host: true,
		cors: false,
		port: getPort(),
		strictPort: true,
		https: {
			// requestCert: true,
			// rejectUnauthorized: true,
			key: readFileSync(join(__dirname, './cert/cert.key')),
			cert: readFileSync(join(__dirname, './cert/cert.crt'))
		}
	}
});
