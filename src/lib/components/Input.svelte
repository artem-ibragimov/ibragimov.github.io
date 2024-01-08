<script lang="ts">
	export let type = 'string';
	export let value: string | number;
	export let options: (string | number)[] = [];
	export let autocomplete = 'on';
	export let placeholder = '';
	export let max = '';
	export let min = '';

	function onchange(v: string | number) {
		value = v;
	}
</script>

<div class="Input">
	<label for="input">{placeholder}</label>
	{#if options.length !== 0}
		{#each options as opt}
			<label class="radio">
				<input name="radio" type="radio" checked={opt == value} on:change={() => onchange(opt)} />
				<span>{opt}</span>
			</label>
		{/each}
	{:else if type == 'number'}
		<input
			class="Input__number"
			{placeholder}
			{max}
			{min}
			bind:value
			type="number"
			on:input
			on:change
			{autocomplete}
		/>
	{:else}
		<input class="Input__text" {placeholder} bind:value on:input on:change {autocomplete} />
	{/if}
</div>

<style lang="less">
	.Input {
		display: flex;
		gap: 8px;
	}
	.Input__number {
		width: 50px;
		font-variant-numeric: oldstyle-nums;
	}
	.radio {
		display: block;
		cursor: pointer;
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
		text-align: left;
	}
	.radio input {
		display: none;
	}
	.radio input + span {
		display: inline-block;
		position: relative;
		padding-left: 30px;
	}
	.radio input + span:before {
		content: '';
		display: block;
		position: absolute;
		top: 0px;
		left: 0px;
		border-radius: 50%;
		margin-right: 5px;
		width: 16px;
		height: 16px;
		border: 1px solid #ccc;
		background: #fff;
	}
	.radio input + span:after {
		content: '';
		display: block;
		width: 10px;
		height: 10px;
		background: #222;
		position: absolute;
		border-radius: 50%;
		top: 3px;
		left: 3px;
		opacity: 0;
		transform: scale(0, 0);
		transition: all 0.2s cubic-bezier(0.64, 0.57, 0.67, 1.53);
	}
	.radio input:checked + span:after {
		opacity: 1;
		transform: scale(1, 1);
	}
</style>
