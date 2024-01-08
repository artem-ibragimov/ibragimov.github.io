<script lang="ts">
	import Article from '$lib/components/Article.svelte';
	import ArticleLinks from '$lib/components/ArticleLinks.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<Article params={data} />
<ArticleLinks random limited name={data.name} />
