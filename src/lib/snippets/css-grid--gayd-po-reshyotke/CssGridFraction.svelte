<script lang="ts">
	import Snippet from '$lib/components/Snippet.svelte';
	import Input from '$lib/components/Input.svelte';

	let shrinked = false;
	let selected: string = '%';
	let options = ['%', 'fr'];
	$: child_1 = selected === '%' ? '25%' : '1fr';
	$: child_2 = selected === '%' ? '75%' : '3fr';
	$: code = `.parent {
      display: grid;
      grid-template-columns: ${child_1} ${child_2};
   }`;
</script>

<Snippet {code}>
	<svelte:fragment slot="settings">
		<Input placeholder="Размер столбцов в " {options} bind:value={selected} />
		[Кликни на блок, чтобы сжать]
	</svelte:fragment>
	<div
		slot="demo"
		style={`grid-template-columns: ${child_1} ${child_2};`}
		class="parent"
		class:shrinked
		on:click={() => {
			shrinked = !shrinked;
		}}
	>
		<div><code>child {child_1}</code></div>
		<div><code>child {child_2}</code></div>
	</div>
</Snippet>

<style lang="less">
	@import '$lib/style/const';
	.parent {
		display: grid;
		cursor: pointer;
		gap: 20px;
		height: 200px;
		width: 300px;
		transition: all 1.5s;
		border: #light_theme[border_accent];
	}
	.parent.shrinked {
		width: 150px;
	}
	.parent div {
		background: #light_theme[card_secondary];
		text-wrap: nowrap;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
