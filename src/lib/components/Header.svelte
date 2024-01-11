<script lang="ts">
	import LogoMd from './LogoMd.svelte';
</script>

<nav class="Header">
	<a href="/" target="_self">
		<LogoMd />
	</a>
</nav>

<style lang="less" scoped>
	@import '$lib/style/const';

	.Header {
		background: #light_theme() [bg];
		display: flex;
		justify-content: center;
		position: sticky;
		top: 0;
		left: 0;
		right: 0;
		top: 0;
		height: 50px;
	}
</style>
