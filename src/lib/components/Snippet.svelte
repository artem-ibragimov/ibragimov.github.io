<script lang="ts">
	export let code: string;
</script>

<div class="Snippet">
	<pre><code>
      {@html code}
   </code></pre>
	<pre>

	<slot name="demo" />
</pre>
</div>

<style lang="less">
	@import '$lib/style/const';

	.Snippet {
		display: flex;
	}
</style>
