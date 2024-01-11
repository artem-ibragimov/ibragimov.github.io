<script lang="ts">
	export let title: string = '';
	export let name: string = '';
	const SIZES = [320, 640, 1280];
	const SIZE_PREFIX = '**';
	$: srcset = SIZES.map((w) => `/img/logo_md${SIZE_PREFIX}${w}.webp ${w}w`).join(', ');
</script>

<img
	src={name}
	alt={title}
	{title}
	{srcset}
	width="199"
	height="45"
	sizes="(max-width: 500px) 100vw, 30vw"
/>
