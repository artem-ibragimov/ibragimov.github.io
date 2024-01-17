<script lang="ts">
	import Snippet from '$lib/components/Snippet.svelte';
	import Input from '$lib/components/Input.svelte';

	let selected = 1;
	let options = [1, 2, 3, 4, 5];
	$: children = Array.from({ length: selected });
	const code = `.parent {
      display: grid;
   }`;
</script>

<Snippet {code}>
	<svelte:fragment slot="settings">
		<Input placeholder="Кол-во дочерних эл" {options} bind:value={selected} />
	</svelte:fragment>
	<div slot="demo" class="parent">
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
		width: 200px;
	}
	.parent div {
		border-bottom: #light_theme[border_accent];
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.parent div:last-child {
		border-bottom: none;
	}
</style>
