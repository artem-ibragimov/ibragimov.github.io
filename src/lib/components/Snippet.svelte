<script lang="ts">
	export let code: string;
</script>

<div class="Snippet">
	<div class="Snippet__settings">
		<slot name="settings" />
		<pre> <code> {@html code} </code> </pre>
	</div>

	<slot name="demo" />
</div>

<style lang="less">
	@import '$lib/style/const';

	.Snippet {
		max-width: 100vw;
		display: flex;
		flex-wrap: wrap;
		gap: 16px;
		justify-content: space-around;
	}
	.Snippet__settings {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}
</style>
