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
		border: #light_theme[border_primary];
		height: 200px;
		box-sizing: border-box;
		width: 500px;
		transition: all 1.5s;
	}
	.parent.shrinked {
		width: 200px;
	}
	.parent div {
		text-wrap: nowrap;
		border-right: #light_theme[border_accent];
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.parent div:last-child {
		border-right: none;
	}
</style>
