<script lang="ts">
	import { onMount } from 'svelte';
	import { siteData } from '$lib/data';
	import { Menu, X } from 'lucide-svelte';

	let isMobileOpen = false;
	let scrollY = 0;
</script>

<svelte:window bind:scrollY />

<div class="pointer-events-none fixed top-0 right-0 left-0 z-50 flex justify-center px-4 pt-6">
	<nav
		class="
    pointer-events-auto
    flex w-full
    max-w-5xl items-center
    justify-between rounded-full border border-white/10
    bg-[#0F172A]/90
    py-3 pr-2 pl-8
    shadow-2xl shadow-black/20 backdrop-blur-lg
    transition-all duration-300
    {scrollY > 20 ? 'scale-[0.98] opacity-95' : 'scale-100 opacity-100'}
  "
	>
		<a
			href="/"
			class="mr-8 flex items-center gap-2 text-2xl font-extrabold tracking-tight text-white"
		>
			{siteData.general.name}
		</a>

		<div class="hidden items-center gap-8 text-sm font-medium text-slate-300 md:flex">
			<a href="/about" class="transition-colors hover:text-white">About</a>
			<a href="/programs" class="transition-colors hover:text-white">Programs</a>
			<a href="/impact" class="transition-colors hover:text-white">Causes</a>
			<a href="/blog" class="transition-colors hover:text-white">Blog</a>
			<a href="/contact" class="transition-colors hover:text-white">Contact</a>
		</div>

		<div class="flex items-center gap-2 pl-8">
			<a
				href="/donate"
				class="hidden items-center justify-center rounded-full bg-[#4ADE80] px-8 py-3 text-sm font-bold text-slate-900 shadow-lg shadow-green-900/20 transition-all hover:scale-105 hover:bg-[#22c55e] md:inline-flex"
			>
				Donate Now
			</a>

			<button
				class="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 md:hidden"
				on:click={() => (isMobileOpen = !isMobileOpen)}
			>
				{#if isMobileOpen}
					<X size={20} />
				{:else}
					<Menu size={20} />
				{/if}
			</button>
		</div>
	</nav>
</div>

{#if isMobileOpen}
	<div
		class="animate-in fade-in zoom-in fixed inset-0 z-40 flex flex-col items-center justify-center space-y-8 bg-slate-900/95 p-6 backdrop-blur-xl duration-200"
	>
		<a href="/about" class="text-3xl font-bold text-white" on:click={() => (isMobileOpen = false)}
			>About</a
		>
		<a
			href="/programs"
			class="text-3xl font-bold text-white"
			on:click={() => (isMobileOpen = false)}>Programs</a
		>
		<a href="/impact" class="text-3xl font-bold text-white" on:click={() => (isMobileOpen = false)}
			>Causes</a
		>
		<a href="/contact" class="text-3xl font-bold text-white" on:click={() => (isMobileOpen = false)}
			>Contact</a
		>
		<a
			href="/donate"
			class="rounded-full bg-[#4ADE80] px-10 py-4 text-xl font-bold text-slate-900"
			on:click={() => (isMobileOpen = false)}
		>
			Donate Now
		</a>

		<button
			class="absolute top-8 right-8 text-white/50 hover:text-white"
			on:click={() => (isMobileOpen = false)}
		>
			<X size={32} />
		</button>
	</div>
{/if}
