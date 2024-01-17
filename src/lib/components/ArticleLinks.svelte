<script lang="ts">
	import { PUBLIC_ORIGIN } from '$env/static/public';
	import Cards from '$lib/components/Cards.svelte';
	import { articles } from '$lib/content';

	export let limited = false;
	export let random = false;
	export let name: string = '';

	$: cards = articles
		.sort(() => (random ? Math.random() - 0.5 : -1))
		.map((data) => ({
			title: data.title,
			href: `/article/${data.name}/`,
			name: data.name,
			keywords: data.keywords.split(',')
		}))
		.filter((card) => (name ? !card.href.includes(name) : true))
		.slice(0, limited ? 4 : void 0);

	$: itemListElement = cards.map((c, i) => ({
		'@type': 'ListItem',
		position: i + 1,
		name: c.title,
		item: `${PUBLIC_ORIGIN}${c.href}`,
		image: c.imgSrc
	}));

	$: schema = JSON.stringify({
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		itemListElement
	});
</script>

<svelte:head>
	{@html `<script type="application/ld+json"> ${schema} </script>`}
</svelte:head>

<nav class="ArticleLinks">
	<Cards {cards} />
</nav>

<style scoped>
	.ArticleLinks {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
		justify-content: center;
	}
</style>
