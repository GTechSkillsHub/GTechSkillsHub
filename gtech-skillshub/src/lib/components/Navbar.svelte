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
    pointer-events-auto flex w-full
    max-w-6xl items-center
    justify-between rounded-full border border-white/10
    bg-[#0F172A]/90 px-6 py-3
    shadow-2xl shadow-black/20 backdrop-blur-lg
    transition-all duration-300
    {scrollY > 20 ? 'scale-[0.98] opacity-95' : 'scale-100 opacity-100'}
  "
	>
		<a
			href="/"
			class="mr-4 flex items-center gap-2 text-2xl font-extrabold tracking-tight text-white"
		>
			{siteData.general.name}
		</a>

		<div class="hidden items-center gap-6 text-sm font-medium text-slate-300 lg:flex">
			<a href="/about" class="transition-colors hover:text-white">About</a>
			<a href="/programs" class="transition-colors hover:text-white">Programs</a>
			<a href="/opportunities" class="transition-colors hover:text-white">Opportunities</a>
			<a href="/contact" class="transition-colors hover:text-white">Contact</a>
		</div>

		<div class="flex items-center gap-3 pl-4">
			<a
				href="/apply"
				class="hidden items-center justify-center rounded-full bg-blue-600 px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-blue-900/20 transition-all hover:scale-105 hover:bg-blue-500 lg:inline-flex"
			>
				Apply Now
			</a>

			<a
				href="/donate"
				class="hidden items-center justify-center rounded-full bg-[#4ADE80] px-6 py-2.5 text-sm font-bold text-slate-900 shadow-lg shadow-green-900/20 transition-all hover:scale-105 hover:bg-[#22c55e] lg:inline-flex"
			>
				Donate Now
			</a>

			<button
				class="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 lg:hidden"
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
		class="animate-in fade-in zoom-in fixed inset-0 z-40 flex flex-col items-center justify-center space-y-6 bg-slate-900/95 p-6 backdrop-blur-xl duration-200"
	>
		<a href="/about" class="text-2xl font-bold text-white" on:click={() => (isMobileOpen = false)}
			>About</a
		>
		<a
			href="/programs"
			class="text-2xl font-bold text-white"
			on:click={() => (isMobileOpen = false)}>Programs</a
		>
		<a
			href="/opportunities"
			class="text-2xl font-bold text-white"
			on:click={() => (isMobileOpen = false)}>Opportunities</a
		>
		<a href="/contact" class="text-2xl font-bold text-white" on:click={() => (isMobileOpen = false)}
			>Contact</a
		>

		<div class="mt-4 flex w-full max-w-xs flex-col gap-4">
			<a
				href="/apply"
				class="w-full rounded-full bg-blue-600 py-4 text-center text-xl font-bold text-white"
				on:click={() => (isMobileOpen = false)}
			>
				Apply Now
			</a>
			<a
				href="/donate"
				class="w-full rounded-full bg-[#4ADE80] py-4 text-center text-xl font-bold text-slate-900"
				on:click={() => (isMobileOpen = false)}
			>
				Donate Now
			</a>
		</div>

		<button
			class="absolute top-8 right-8 text-white/50 hover:text-white"
			on:click={() => (isMobileOpen = false)}
		>
			<X size={32} />
		</button>
	</div>
{/if}
