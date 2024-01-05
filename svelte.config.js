import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { readFileSync } from 'fs';

const content = readFileSync('./src/lib/content.ts').toString();
const entries =
	content
		.slice(content.indexOf('article: {') + 'article: {'.length)
		.split('\n')
		.filter((v) => v.includes(': {'))
		.map((v) => `/article/${v.replace(': {', '').replace(/'|"/gi, '').trim()}`);

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
			entries: ['*', ...entries],
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
