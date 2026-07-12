<script lang="ts">
	import Reveal from '$lib/components/Reveal.svelte';
	import { siteData } from '$lib/data';
	import { ArrowRight, Calendar, Tag } from 'lucide-svelte';

	// Receive the live database data from +page.server.ts
	export let data;
	$: ({ opportunities } = data);

	// Keep the static hero text and steps from siteData for now
	const { hero, howItWorks } = siteData.opportunitiesPage;
</script>

<div class="min-h-screen overflow-x-hidden bg-slate-50 font-sans text-slate-900">
	<section
		class="relative overflow-hidden rounded-b-[3rem] bg-[#0F172A] px-6 pt-48 pb-24 text-white md:px-12"
	>
		<div class="absolute inset-0 bg-slate-800 opacity-20">
			<div class="flex h-full w-full items-center justify-center text-2xl font-bold text-slate-500">
				[Image: {hero.image}]
			</div>
		</div>
		<div
			class="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/80 to-transparent"
		></div>

		<div class="relative z-10 mx-auto max-w-7xl text-center">
			<Reveal>
				<span
					class="mb-6 inline-block rounded-full border border-white/20 bg-white/5 px-3 py-1 text-sm font-bold tracking-widest text-[#4ADE80] uppercase"
				>
					{hero.tag}
				</span>
				<h1 class="mb-6 text-4xl leading-tight font-bold md:text-6xl">
					{hero.title}
				</h1>
				<p class="mx-auto max-w-2xl text-xl leading-relaxed text-slate-300">
					{hero.subtitle}
				</p>
			</Reveal>
		</div>
	</section>

	<section class="relative z-20 -mt-12 mb-20 px-6 md:px-12">
		<div class="mx-auto max-w-6xl rounded-[2rem] border border-slate-100 bg-white p-12 shadow-xl">
			<div
				class="grid gap-12 divide-y divide-slate-100 text-center md:grid-cols-3 md:divide-x md:divide-y-0"
			>
				{#each howItWorks as step, i}
					<div class="px-4 pt-8 md:pt-0">
						<span class="mb-4 block text-6xl font-black text-slate-100">{step.step}</span>
						<h3 class="mb-2 text-xl font-bold text-slate-900">{step.title}</h3>
						<p class="text-slate-500">{step.desc}</p>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<section class="px-6 pb-32 md:px-12">
		<div class="mx-auto max-w-7xl">
			<Reveal>
				<div class="mb-12">
					<h2 class="text-3xl font-bold text-slate-900">Latest Openings</h2>
					<p class="text-slate-600">Browse categories below.</p>
				</div>
			</Reveal>

			<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
				{#each opportunities as opp, i}
					<Reveal delay={i * 0.1}>
						<div
							class="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
						>
							<div class="relative h-56 overflow-hidden bg-slate-200">
								<div
									class="absolute inset-0 flex items-center justify-center font-bold text-slate-400"
								>
									[Image: {opp.image_url}]
								</div>
								<div
									class="absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold tracking-widest text-blue-600 uppercase shadow-sm backdrop-blur"
								>
									{opp.category}
								</div>
							</div>

							<div class="flex flex-grow flex-col p-8">
								<h3
									class="mb-3 text-xl font-bold text-slate-900 transition-colors group-hover:text-blue-600"
								>
									{opp.title}
								</h3>
								<p class="mb-4 text-sm font-bold tracking-wider text-slate-500 uppercase">
									{opp.provider}
								</p>
								<p class="mb-8 line-clamp-3 flex-grow text-slate-600">
									{opp.description}
								</p>

								<div class="mb-6 h-px w-full bg-slate-100"></div>

								<div class="mb-6 flex items-center justify-between text-sm">
									<div class="flex items-center gap-2 text-slate-500">
										<Calendar size={16} />
										<span class="font-bold text-slate-700">{opp.deadline}</span>
									</div>
									<div class="flex items-center gap-2 text-slate-500">
										<Tag size={16} />
										<span class="font-bold text-slate-700">{opp.value}</span>
									</div>
								</div>

								<a
									href="/opportunities/{opp.id}"
									class="inline-flex w-full items-center justify-center rounded-xl border border-slate-200 bg-slate-50 py-3 text-sm font-bold text-slate-900 transition-all hover:border-[#0F172A] hover:bg-[#0F172A] hover:text-white"
								>
									View Details <ArrowRight size={16} class="ml-2" />
								</a>
							</div>
						</div>
					</Reveal>
				{/each}
			</div>
		</div>
	</section>
</div>
