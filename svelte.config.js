import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		inlineStyleThreshold: 4096,
		prerender: {
			concurrency: 3,
			crawl: false,
			handleHttpError: (details) => {
				console.warn(details);
			},
			origin: 'https://ibragimov.blog',
			handleMissingId: (details) => {
				console.warn(details);
			},
			entries: ['*'],
			handleEntryGeneratorMismatch: (details) => {
				console.warn(details);
			}
		},
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			// fallback: 'index.html',
			precompress: false,
			strict: true
		}),
		alias: {
			$lib: 'src/lib'
		}
	}
};

export default config;
