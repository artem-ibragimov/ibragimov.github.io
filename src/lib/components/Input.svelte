<script lang="ts">
	export let type = 'string';
	export let value: string | number;
	export let autocomplete = 'on';
	export let placeholder = '';
</script>

<label for="input">{placeholder}</label>
{#if type == 'number'}
	<input class="Input__number" {placeholder} bind:value type="number" on:input on:change {autocomplete} />
{:else}
	<input class="Input" {placeholder} bind:value on:input on:change {autocomplete} />
{/if}

<style lang="less">
	.Input__number {
      width: 40px;
		font-variant-numeric: oldstyle-nums;
	}
</style>
