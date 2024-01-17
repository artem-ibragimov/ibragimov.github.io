<script lang="ts">
	export let lazy: boolean = false;
	export let title: string = '';
	export let keywords: string[] = [];
	export let name: string = '';
	export let href: string | undefined = void 0;
	const SIZES = [320, 640, 1280];
	const SIZE_PREFIX = '**';
	const loading: 'lazy' | 'eager' = lazy ? 'lazy' : 'eager';
	$: srcset = name ? SIZES.map((w) => `/img/${name}${SIZE_PREFIX}${w}.webp ${w}w`).join(', ') : '';
</script>

<div class="Card" class:Card__text={!!keywords.length} class:Card-href={href}>
	<a class="Card__a" {href} target="_self">
		<img
			{loading}
			class="Card__banner"
			src={name}
			alt={title}
			{title}
			{srcset}
			width="400"
			height="220"
			sizes="(max-width: 500px) 100vw, 30vw"
		/>
		<div class="Card__content">
			{#each keywords as kw}
				<code>#{kw} </code>
			{/each}
		</div>
	</a>
</div>

<style scoped>
	.Card {
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		min-width: 200px;
		max-width: 400px;
		border-radius: 8px;
		border: 1px solid #727272;
		transition: all 0.4s ease-in-out;
	}
	@media screen and (min-width: 500px) {
		.Card {
			flex: 1 400px;
		}
	}
	.Card-href {
		cursor: pointer;
	}
	.Card__text {
		flex: 1 1 45%;
	}
	.Card:has(:hover, :focus) {
		box-shadow:
			rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
			rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
	}

	.Card__a {
		text-decoration: none;
		color: inherit;
		display: flex;
		flex-direction: column;
	}
	.Card__banner {
		object-fit: cover;
		border-radius: 8px 8px 0 0;
	}

	.Card__content {
		padding: 16px;
	}
</style>
