<script lang="ts">
	import Snippet from '$lib/components/Snippet.svelte';
	import Input from '$lib/components/Input.svelte';
	let options = ['sidebar', 'header', 'main'];
	const css = {
		sidebar: `.sidebar {
      grid-area: sidebar;
   }`,
		header: `.header {
      grid-area: header;
   }`,
		main: `.main {
      grid-area: main;
   }`
	};
	let selected = options[0];
	$: code = `.parent {
      display: grid;
      grid-template-columns: 2fr 5fr;
      grid-template-rows: 50px 1fr;
      grid-template-areas:
         'sidebar header'
         'sidebar main';
   }
   ${css[selected]}
`;
</script>

<Snippet {code}>
	<svelte:fragment slot="settings">
		<Input placeholder="" {options} bind:value={selected} />
	</svelte:fragment>
	<div slot="demo" class="parent">
		<div class="sidebar" class:selected={selected === 'sidebar'}><code>sidebar</code></div>
		<div class="header" class:selected={selected === 'header'}><code>header</code></div>
		<div class="main" class:selected={selected === 'main'}><code>main</code></div>
	</div>
</Snippet>

<style lang="less">
	@import '$lib/style/const';
	.parent {
		display: grid;
		grid-template-columns: 2fr 5fr;
		grid-template-rows: 50px 1fr;
		grid-template-areas:
			'sidebar header'
			'sidebar main';
		border: #light_theme[border_primary];
		height: 200px;
		flex: 1;
	}

	.sidebar {
		grid-area: sidebar;
	}
	.header {
		grid-area: header;
	}
	.main {
		grid-area: main;
	}
	.parent div {
		border: #light_theme[border_secondary];
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.parent div.selected {
		border: #light_theme[border_accent];
	}
</style>
