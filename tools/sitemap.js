import chalk from 'chalk';
import { readdirSync, statSync, writeFileSync } from 'fs';
import path from 'path';

const error = (e) => console.error(chalk.red(e));

try {
	createSiteMap('./build', {
		changefreq: 'always',
		lastmod: new Date().toISOString(),
		priority: 0.9,
		origin: 'https://ibragimov.blog'
	});
} catch (e) {
	error(e);
}

function createSiteMap(dir, options) {
	const paths = collectPaths(dir);
	writeFileSync(
		path.resolve(dir, 'sitemap.xml'),
		`<?xml version="1.0" encoding="UTF-8"?>
	<urlset
		xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
		xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd
		http://www.w3.org/1999/xhtml http://www.w3.org/2002/08/xhtml/xhtml1-strict.xsd"
		xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
		xmlns:xhtml="http://www.w3.org/1999/xhtml"   
	>
${paths
	.map(
		(p) => `	\t<url>
		\t<loc>${options.origin}${p}</loc>
		\t<lastmod>${options.lastmod}</lastmod>
		\t<changefreq>${options.changefreq}</changefreq>
		\t<priority>${options.priority}</priority>
	\t</url>`
	)
	.join('\n')}
</urlset>`
	);
}

/**
 * @param {string} root
 * @returns {string[]}
 */
function collectPaths(root) {
	const paths = readdirSync(root).map((entity_name) => path.join(root, entity_name));
	const dir_paths = paths.filter((p) => !p.includes('.'));
	return paths
		.filter((p) => p.endsWith('index.html'))
		.map((p) => p.replace(/build|index\.html/gi, ''))
		.concat(...dir_paths.map(collectPaths));
}
