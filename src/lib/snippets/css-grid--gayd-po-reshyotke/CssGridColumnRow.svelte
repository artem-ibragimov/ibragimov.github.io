<script lang="ts">
	import Snippet from '$lib/components/Snippet.svelte';

	$: css = `
   .parent {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: repeat(4, 1fr);
   }

   .child {
      grid-column: 2 / 4;
      grid-row: 2 / 4;
   }`;
</script>

<Snippet code={css}>
	<div slot="demo" class="parent">
		{#each Array(6) as _}
			<div></div>
		{/each}
		<div class="child"><code>child </code></div>
		{#each Array(6) as _}
			<div></div>
		{/each}
	</div>
</Snippet>

<style lang="less">
	@import '$lib/style/const';
	.parent {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-template-rows: repeat(4, 1fr);
		border: #light_theme[border_primary];
		height: 200px;
		flex: 1;
		box-sizing: border-box;
	}
	.parent div {
		border: #light_theme[border_secondary];
		box-sizing: border-box;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.parent div.child {
		grid-column: 2 / 4;
		grid-row: 2 / 4;
		border: #light_theme[border_accent];
	}
</style>
