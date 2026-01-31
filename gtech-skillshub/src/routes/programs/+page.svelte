<script lang="ts">
	import Reveal from '$lib/components/Reveal.svelte';
	import Button from '$lib/components/Button.svelte';
	import { siteData } from '$lib/data';
	import { ArrowRight, CheckCircle2 } from 'lucide-svelte';

	const { hero } = siteData.programsPage;
</script>

<div class="min-h-screen overflow-x-hidden bg-slate-50 font-sans text-slate-900">
	<section
		class="relative overflow-hidden rounded-b-[3rem] bg-[#0F172A] px-6 pt-48 pb-32 text-white md:px-12"
	>
		<div
			class="pointer-events-none absolute top-0 right-0 h-full w-2/3 bg-gradient-to-l from-blue-900/20 to-transparent"
		></div>

		<div class="relative z-10 mx-auto max-w-7xl">
			<Reveal>
				<span
					class="mb-8 inline-block rounded-full border border-white/20 bg-white/5 px-3 py-1 text-sm font-bold tracking-widest text-[#4ADE80] uppercase"
				>
					{hero.tag}
				</span>
				<h1 class="mb-8 max-w-4xl text-5xl leading-tight font-bold md:text-7xl">
					{hero.title}
				</h1>
				<p class="max-w-2xl text-xl leading-relaxed text-slate-400">
					{hero.subtitle}
				</p>
			</Reveal>
		</div>
	</section>

	<section class="px-6 md:px-12 mt-12 pb-32">
		<div class="mx-auto flex max-w-7xl flex-col gap-8">
			{#each siteData.programs as program, i}
				<Reveal delay={i * 0.1}>
					<div
						class="group flex flex-col items-center gap-8 rounded-[2rem] border border-slate-100 bg-white p-6 shadow-sm transition-all duration-500 hover:shadow-2xl md:p-8 lg:flex-row lg:gap-12"
					>
						<div
							class="relative aspect-video w-full shrink-0 overflow-hidden rounded-3xl bg-slate-100 lg:aspect-[4/3] lg:w-[40%]"
						>
							<div
								class="absolute inset-0 flex items-center justify-center bg-slate-200 text-slate-400 transition-transform duration-700 group-hover:scale-105"
							>
								[Image: {program.image}]
							</div>
							<div
								class="absolute top-4 left-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white text-blue-600 shadow-md"
							>
								<svelte:component this={program.icon} size={24} />
							</div>
						</div>

						<div class="flex w-full flex-col justify-center py-2">
							<div class="mb-4">
								<span
									class="rounded-full bg-blue-50 px-4 py-1.5 text-xs font-bold tracking-widest text-blue-600 uppercase"
								>
									{program.duration} Program
								</span>
							</div>

							<h3
								class="mb-4 text-3xl font-bold text-slate-900 transition-colors group-hover:text-blue-600"
							>
								{program.title}
							</h3>

							<p class="mb-8 text-lg leading-relaxed text-slate-600">
								{program.description}
							</p>

							<div class="mb-8 grid grid-cols-2 gap-6 border-t border-slate-100 pt-6">
								<div>
									<p class="mb-1 text-xs font-bold tracking-widest text-slate-400 uppercase">
										Target Audience
									</p>
									<p class="text-lg font-bold text-slate-900">{program.audience}</p>
								</div>
								<div>
									<p class="mb-1 text-xs font-bold tracking-widest text-slate-400 uppercase">
										Key Outcomes
									</p>
									<div class="flex flex-wrap gap-2">
										{#each program.outcomes.slice(0, 2) as outcome}
											<span
												class="inline-flex items-center gap-1 text-sm font-medium text-slate-700"
											>
												<CheckCircle2 size={14} class="text-[#4ADE80]" />
												{outcome}
											</span>
										{/each}
									</div>
								</div>
							</div>

							<div>
								<Button href="/contact" variant="outline">
									Learn More <ArrowRight size={18} />
								</Button>
							</div>
						</div>
					</div>
				</Reveal>
			{/each}
		</div>
	</section>

	<section class="px-6 pb-24 md:px-12">
		<Reveal>
			<div
				class="relative mx-auto max-w-7xl overflow-hidden rounded-[3rem] bg-slate-900 px-6 py-20 text-center"
			>
				<div class="relative z-10">
					<h2 class="mb-6 text-3xl font-bold text-white md:text-5xl">Start Your Journey Today</h2>
					<p class="mx-auto mb-8 max-w-xl text-slate-300">
						Join hundreds of students transforming their lives through digital skills.
					</p>
					<a
						href="/contact"
						class="inline-flex items-center justify-center rounded-full bg-[#4ADE80] px-10 py-4 text-lg font-bold text-slate-900 transition-transform hover:scale-105"
					>
						Apply Now
					</a>
				</div>
			</div>
		</Reveal>
	</section>
</div>
