<script lang="ts">
	import { Motion } from 'svelte-motion';

	// "delay" allows you to stagger items (e.g., make card 2 appear after card 1)
	export let delay = 0;

	// "y" is the distance the element floats up.
	// 30px is subtle and premium; higher numbers feel more energetic.
	export let y = 30;
</script>

<Motion
	initial={{ opacity: 0, y: y }}
	{...{ whileInView: { opacity: 1, y: 0} }}
	{...{ viewport: { once: true, margin: '-50px'} }}
	transition={{
		duration: 0.8,
		delay: delay,
		ease: [0.22, 1, 0.36, 1] // The specific "Framer Cubic Bezier" curve
	}}
	let:motion
>
	<div use:motion class="h-full">
		<slot />
	</div>
</Motion>
