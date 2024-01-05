<script lang="ts">
	import Article from '$lib/article/Article.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<Article params={data} />
