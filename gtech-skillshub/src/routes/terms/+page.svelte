<script lang="ts">
	import Reveal from '$lib/components/Reveal.svelte';
	import { siteData } from '$lib/data';

	const { terms } = siteData.legal;
</script>

<div class="min-h-screen bg-slate-50 font-sans text-slate-900">
	<section
		class="relative overflow-hidden rounded-b-[3rem] bg-[#0F172A] px-6 pt-40 pb-20 text-white md:px-12"
	>
		<div
			class="pointer-events-none absolute top-0 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-green-500/10 blur-[100px]"
		></div>

		<div class="relative z-10 mx-auto max-w-4xl text-center">
			<Reveal>
				<h1 class="mb-6 text-4xl font-bold md:text-6xl">{terms.title}</h1>
				<p class="mb-4 text-xl text-slate-300">{terms.subtitle}</p>
				<p class="text-sm font-bold tracking-widest text-[#4ADE80] uppercase">
					{terms.lastUpdated}
				</p>
			</Reveal>
		</div>
	</section>

	<section class="px-6 py-20 md:px-12">
		<div
			class="mx-auto max-w-3xl rounded-[2rem] border border-slate-100 bg-white p-8 shadow-xl md:p-16"
		>
			<Reveal>
				<div class="space-y-12">
					{#each terms.content as section}
						<div>
							<h2 class="mb-4 text-2xl font-bold text-slate-900">{section.heading}</h2>
							<p class="text-lg leading-relaxed text-slate-600">
								{section.text}
							</p>
						</div>
					{/each}
				</div>
			</Reveal>
		</div>
	</section>
</div>
