<script lang="ts">
	import Snippet from '$lib/components/Snippet.svelte';
	import Input from '$lib/components/Input.svelte';

	let nodes_number = 1;
	$: nodes = Array.from({ length: nodes_number }).map((_, i) => i + 1);
	const code = `.parent {
      display: grid;
   }`;
</script>

<Snippet {code}>
	<div slot="demo" class="parent">
		{#each nodes as i}
			<div>{i}</div>
		{/each}
	</div>
	<svelte:fragment slot="settings">
		<Input placeholder="Кол-во дочерних эл" type="number" max="10" bind:value={nodes_number} />
	</svelte:fragment>
</Snippet>

<style lang="less">
	@import '$lib/style/const';
	.parent {
		display: grid;
		border: #light_theme[border_primary];
		border-color: #light_theme[accent];
		height: 200px;
		flex: 1;
		box-sizing: border-box;
	}
	.parent div {
		text-align: center;
	}
	.parent div:nth-child(odd) {
		background: #light_theme[card_secondary];
	}
</style>
