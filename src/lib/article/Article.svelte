<script lang="ts">
	import { content } from '$lib/content';

	export let params: { name: string };
	const date = new Date().toISOString();
	const poster = `/assets/img/${params.name}.webp`;
	const data = content.text.article[params.name as keyof typeof content.text.article];
	$: schema = JSON.stringify({
		'@context': 'https://schema.org',
		'@type': 'BlogPosting',
		headline: data.title,
		image: poster,
		datePublished: date,
		keywords: data.keywords,
		dateModified: date,
		// TODO author, creator
		articleBody: data.chapters.map(([title, text]) => `${title}\n${text}`).join('\n'),
		about: data.description
	});
</script>

<svelte:head>
	<title>{data.title}</title>
	<meta name="title" content={data.title} />
	<meta name="description" content={data.description} />
	<meta name="keywords" content={data.keywords} />

	<meta name="og:title" property="og:title" content={data.title} />
	<meta property="og:image" content={poster} />
	<meta property="og:type" content="article" />
	<meta property="og:locale" content="ru" />
	<meta property="og:description" content={data.description} />

	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:title" content={data.title} />
	<meta property="twitter:description" content={data.description} />
	<meta property="twitter:image" content={poster} />

	{@html `<script type="application/ld+json"> ${schema} </script>`}
</svelte:head>

<article class="Article">
	<h1>{data.title}</h1>
	{#each data.chapters as [title, text, snippet]}
		<section>
			<h3>{title}</h3>
			<div class="Article__section">
				<span>{@html text}</span>
				<svelte:component this={snippet} />
			</div>
		</section>
	{/each}
</article>

<style>
	.Article {
		padding: 10px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: stretch;
		margin: auto;
		max-width: 920px;
	}
	.Article__section {
		display: flex;
		gap: 16px;
		flex-wrap: wrap;
	}
</style>
