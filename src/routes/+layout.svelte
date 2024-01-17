<script>
	import Header from '$lib/components/Header.svelte';
</script>

<Header />
<main class="Layout">
	<slot />
</main>

<style lang="less" scoped>
	.Layout {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100vw;
		min-height: 100vh;
		padding: 16px;
	}
</style>
