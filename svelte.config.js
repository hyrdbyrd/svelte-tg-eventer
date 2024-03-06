import { resolve } from 'node:path';

import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			fallback: '404.html',
		}),
		alias: {
			'@': resolve('./src'),
		},
		paths: {
			base: process.env.NODE_ENV === 'production' ? process.env.FRONT_BASE || '' : '',
		},
	},
};

export default config;
