<script lang="ts">
	import Snippet from '$lib/components/Snippet.svelte';
	const lang = 'css';
	const code = `
   .wrapper {
      display: grid;
   }`;
</script>

<Snippet {lang} {code}>
	<div slot="demo"></div>
</Snippet>
