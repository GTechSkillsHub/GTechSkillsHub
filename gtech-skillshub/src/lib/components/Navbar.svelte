<script lang="ts">
	import { onMount } from 'svelte';
	import { siteData } from '$lib/data';
	import Button from '$lib/components/Button.svelte';
	import { Menu, X } from 'lucide-svelte';

	let isScrolled = false;
	let isMobileOpen = false;

	// Detect scroll to toggle the "glass" effect
	onMount(() => {
		const handleScroll = () => {
			isScrolled = window.scrollY > 20;
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<header
	class="fixed top-0 right-0 left-0 z-50 transition-all duration-300 {isScrolled
		? 'border-b border-slate-100 bg-white/90 py-4 shadow-sm backdrop-blur-md'
		: 'bg-transparent py-6'}"
>
	<div class="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-12">
		<a href="/" class="flex items-center gap-2 text-xl font-bold tracking-tighter text-slate-900">
			<img src="/logo.svg" alt="Logo" class="h-8 w-8 object-contain" />
			{siteData.general.name}.
		</a>

		<nav class="hidden items-center gap-8 md:flex">
			<a
				href="/about"
				class="text-sm font-medium text-slate-600 transition-colors hover:text-blue-600">About</a
			>
			<a
				href="/programs"
				class="text-sm font-medium text-slate-600 transition-colors hover:text-blue-600">Programs</a
			>
			<a
				href="/impact"
				class="text-sm font-medium text-slate-600 transition-colors hover:text-blue-600">Impact</a
			>
			<a
				href="/contact"
				class="text-sm font-medium text-slate-600 transition-colors hover:text-blue-600">Contact</a
			>
		</nav>

		<div class="hidden md:block">
			<Button href="/donate" variant="primary">Donate Now</Button>
		</div>

		<button class="text-slate-900 md:hidden" on:click={() => (isMobileOpen = !isMobileOpen)}>
			{#if isMobileOpen}
				<X size={28} />
			{:else}
				<Menu size={28} />
			{/if}
		</button>
	</div>

	{#if isMobileOpen}
		<div
			class="absolute top-full right-0 left-0 flex flex-col gap-4 border-b border-slate-100 bg-white p-6 shadow-xl md:hidden"
		>
			<a
				href="/about"
				class="text-lg font-medium text-slate-900"
				on:click={() => (isMobileOpen = false)}>About</a
			>
			<a
				href="/programs"
				class="text-lg font-medium text-slate-900"
				on:click={() => (isMobileOpen = false)}>Programs</a
			>
			<a
				href="/impact"
				class="text-lg font-medium text-slate-900"
				on:click={() => (isMobileOpen = false)}>Impact</a
			>
			<a
				href="/contact"
				class="text-lg font-medium text-slate-900"
				on:click={() => (isMobileOpen = false)}>Contact</a
			>
			<div class="border-t border-slate-100 pt-4">
				<Button href="/donate" variant="primary">Donate Now</Button>
			</div>
		</div>
	{/if}
</header>
