<script lang="ts">
	import { content } from '$lib/content';
	const title = content.text.about.title;
	const description = content.text.about.description;
	const keywords = content.text.about.keywords;
	const poster = `/img/logo_.png`;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="title" content={title} />
	<meta name="description" content={description} />
	<meta name="keywords" content={keywords} />

	<meta name="og:title" property="og:title" content={title} />
	<meta property="og:image" content={poster} />
	<meta property="og:locale" content="ru" />
	<meta property="og:description" content={description} />

	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:title" content={title} />
	<meta property="twitter:description" content={description} />
	<meta property="twitter:image" content={poster} />
</svelte:head>

<section>
	<h3>{title}</h3>
	<p>{description}</p>
</section>
