<script lang="ts">
	import Snippet from '$lib/components/Snippet.svelte';
	import Input from '$lib/components/Input.svelte';

	const align_types = ['justify', 'align'];
	const align_target = ['content', 'items', 'self'];
	const values = {
		content: ['start', 'center', 'end', 'space-between', 'space-around', 'space-evenly'],
		items: ['stretch', 'start', 'center', 'end'],
		self: ['stretch', 'start', 'center', 'end']
	};
	let selected_align_type = align_types[0];
	let selected_align_target = align_target[0];
	let selected_value = '';
	$: css_values = values[selected_align_target] || [];
	$: selected_aligment = `${selected_align_type}-${selected_align_target}`;
	$: if (selected_aligment) {
		selected_value = '';
	}
	$: css = selected_value
		? `
      ${selected_aligment}: ${selected_value};`
		: '';
	$: self_style = selected_align_target === 'self';
	$: code = self_style
		? `.parent {
      display: grid;
   }

   .child_1 {${css}
   }`
		: `.parent {
      display: grid; ${css}
   }`;
</script>

<Snippet {code}>
	<svelte:fragment slot="settings">
		<div style="display:flex; gap: 8px;">
			<Input options={align_types} bind:value={selected_align_type} vertical />
			<Input options={align_target} bind:value={selected_align_target} vertical />
			<Input options={css_values} bind:value={selected_value} vertical />
		</div>
	</svelte:fragment>
	<div slot="demo" class="parent" style={self_style ? null : css}>
		<div class:selected={!self_style}><code>child #0</code></div>
		<div class="selected child_1" style={self_style ? css : null}><code>child #1</code></div>
		<div class:selected={!self_style}><code>child #2</code></div>
	</div>
</Snippet>

<style lang="less">
	@import '$lib/style/const';
	.parent {
		display: grid;
		border-right: #light_theme[border_secondary];
		border-bottom: #light_theme[border_secondary];
		grid-template-columns: repeat(2, 100px);
		grid-template-rows: repeat(2, 100px);
		height: 300px;
		width: 300px;
		transition: all ease-in-out 0.25s;
		background-size: 100px 100px;
		background-image: linear-gradient(to right, @color-secondary, 0.5px, transparent 0.5px),
			linear-gradient(to bottom, @color-secondary 0.5px, transparent 0.5px);
	}
	.parent div {
		transition: all 1s;
		border: #light_theme[border_primary];
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.parent div.selected {
		border: #light_theme[border_accent];
	}
</style>
