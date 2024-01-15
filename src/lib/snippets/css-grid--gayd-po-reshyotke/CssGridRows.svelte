<script lang="ts">
	import Snippet from '$lib/components/Snippet.svelte';
	import Input from '$lib/components/Input.svelte';

	let rows_selected = 1;
	let col_selected = 1;
	let options = [1, 2, 3];
	$: cols = `grid-template-columns:${` 1fr`.repeat(col_selected)};`;
	$: rows = `grid-template-rows:${` 1fr`.repeat(rows_selected)};`;
	$: children = Array.from({ length: Math.round(rows_selected * col_selected) });
	$: css = `   display: grid;
      ${cols}
      ${rows}`;
	$: code = `.parent {
   ${css}
   }`;
</script>

<Snippet {code}>
	<svelte:fragment slot="settings">
		<Input placeholder="Число столбцов" {options} bind:value={col_selected} />
		<Input placeholder="Число строк" {options} bind:value={rows_selected} />
	</svelte:fragment>
	<div slot="demo" class="parent" style={css}>
		{#each children as _, i}
			<div><code>child #{i}</code></div>
		{/each}
	</div>
</Snippet>

<style lang="less">
	@import '$lib/style/const';
	.parent {
		display: grid;
		border: #light_theme[border_primary];
		height: 200px;
		flex: 1;
		box-sizing: border-box;
	}
	.parent div {
		box-sizing: border-box;
		border: #light_theme[border_accent];
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
