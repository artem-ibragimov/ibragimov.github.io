<script lang="ts">
	import { content } from '$lib/content';
	import { transpile } from '$lib/transpilation';
	import { onMount } from 'svelte';

	export let params: { name: string };
	const date = new Date().toISOString();
	const poster = `/img/${params.name}.png`;
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
	<div class="Article__content">
		{#each data.chapters as [title, ...entities]}
			{@const id = transpile(title.toLowerCase()).replaceAll(' ', '-')}
			<section>
				<a href={`#${id}`} name={id} {id}> <h2>{title}</h2></a>
				<div class="Article__section">
					{#each entities as entity}
						{#if typeof entity === 'string'}
							<p>{@html entity}</p>
						{:else}
							<svelte:component this={entity} />
						{/if}
					{/each}
				</div>
			</section>
		{/each}
	</div>
</article>

<style scoped>
	.Article {
		max-width: 900px;
	}
	.Article__content {
		display: flex;
		flex-direction: column;
		gap: 16px;
	}
	.Article__section {
		white-space: pre-line;
		display: flex;
		flex-direction: column;
		gap: 16px;
		flex-wrap: wrap;
	}
</style>
