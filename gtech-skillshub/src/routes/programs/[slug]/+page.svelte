<script lang="ts">
	import { page } from '$app/stores';
	import { siteData } from '$lib/data';
	import Reveal from '$lib/components/Reveal.svelte';
	import Button from '$lib/components/Button.svelte';
	import { CheckCircle2, ArrowRight, Quote } from 'lucide-svelte';

	// Find the program. If not found, 'program' will be undefined.
	$: program = siteData.programs.find((p) => p.id === $page.params.slug);
</script>

{#if program}
	<div class="min-h-screen overflow-x-hidden bg-slate-50 font-sans text-slate-900">
		<section
			class="relative overflow-hidden rounded-b-[3rem] bg-[#0F172A] px-6 pt-48 pb-24 text-white md:px-12"
		>
			<div class="absolute inset-0 bg-slate-800 opacity-20">
				<div
					class="flex h-full w-full items-center justify-center text-2xl font-bold text-slate-500"
				>
					[Hero Image: {program.image}]
				</div>
			</div>

			<div
				class="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/80 to-transparent"
			></div>

			<div class="relative z-10 mx-auto max-w-7xl">
				<Reveal>
					<span
						class="mb-6 inline-block rounded-full border border-white/20 bg-white/5 px-3 py-1 text-sm font-bold tracking-widest text-[#4ADE80] uppercase"
					>
						{program.duration} Program
					</span>
					<h1 class="mb-6 max-w-4xl text-4xl leading-tight font-bold md:text-6xl">
						{program.title}
					</h1>
					<p class="max-w-2xl text-xl leading-relaxed text-slate-300">
						{program.subtitle || 'Empowering youth through digital excellence.'}
					</p>
				</Reveal>
			</div>
		</section>

		<section class="px-6 py-24 pb-12 md:px-12">
			<div class="mx-auto grid max-w-7xl gap-16 lg:grid-cols-3">
				<div class="flex flex-col gap-12 lg:col-span-2">
					<Reveal>
						<div class="mb-12">
							<h2 class="mb-6 text-3xl font-bold text-slate-900">Introduction & Commitment</h2>
							<p class="text-lg leading-relaxed text-slate-600">
								{program.fullDescription}
							</p>
						</div>
					</Reveal>

					<Reveal delay={0.1}>
						<div class="mb-12">
							<h3 class="mb-6 text-2xl font-bold text-slate-900">Key Program Interventions</h3>
							<div class="rounded-[2rem] border border-slate-100 bg-white p-8 shadow-sm">
								<ul class="space-y-4">
									{#each program.curriculum as item}
										<li class="flex items-start gap-3">
											<CheckCircle2 class="mt-1 shrink-0 text-[#4ADE80]" />
											<span class="text-lg font-medium text-slate-700">{item}</span>
										</li>
									{/each}
								</ul>
							</div>
						</div>
					</Reveal>

					<div class="mb-12">
						<Reveal delay={0.2}>
							<h3 class="mb-6 text-2xl font-bold text-slate-900">Community Feedback</h3>
							<div class="grid gap-6 md:grid-cols-2">
								{#each program.testimonials as testimonial}
									<div
										class="relative rounded-[2rem] border border-slate-100 bg-white p-8 shadow-sm"
									>
										<Quote class="absolute top-6 right-6 text-blue-100" size={40} />
										<p class="relative z-10 mb-6 leading-relaxed text-slate-600 italic">
											"{testimonial.text}"
										</p>
										<div>
											<p class="font-bold text-slate-900">{testimonial.name}</p>
											<p class="text-xs font-bold tracking-widest text-[#4ADE80] uppercase">
												{testimonial.role}
											</p>
										</div>
									</div>
								{/each}
							</div>
						</Reveal>
					</div>
				</div>

				<div class="relative hidden lg:block">
					<div class="sticky top-24">
						<Reveal delay={0.3}>
							<div
								class="rounded-[2rem] border border-slate-100 bg-white p-8 shadow-2xl shadow-slate-200/50"
							>
								<span class="mb-2 block text-xs font-bold tracking-widest text-[#4ADE80] uppercase"
									>Join the next cohort</span
								>
								<h3 class="mb-2 text-3xl font-bold text-slate-900">{program.title}</h3>

								<div class="mt-4 mb-8 flex flex-wrap gap-2">
									<span class="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600"
										>{program.audience}</span
									>
									<span class="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600"
										>Free of Cost</span
									>
								</div>

								<p class="mb-8 text-sm text-slate-500">
									Applications are open. Limited spots available for dedicated learners.
								</p>

								<a
									href="/apply"
									class="mb-4 inline-flex w-full items-center justify-center rounded-xl bg-[#4ADE80] px-8 py-4 text-lg font-bold text-slate-900 shadow-lg shadow-green-900/10 transition-all hover:scale-[1.02] hover:bg-[#22c55e]"
								>
									Register Now <ArrowRight size={20} class="ml-2" />
								</a>
								<p class="text-center text-xs text-slate-400">Takes 2 minutes to apply</p>
							</div>
						</Reveal>
					</div>
				</div>
			</div>
		</section>

		<section class="px-6 pt-12 pb-24 md:px-12">
			<div class="mx-auto max-w-7xl">
				<Reveal>
					<div class="mb-12">
						<span class="mb-4 block text-sm font-bold tracking-widest text-blue-600 uppercase"
							>Gallery</span
						>
						<h2 class="text-4xl font-bold text-slate-900">Workshops in Action</h2>
					</div>
				</Reveal>

				<Reveal delay={0.2}>
					<div class="grid h-auto grid-cols-1 gap-4 md:h-[500px] md:grid-cols-4 md:grid-rows-2">
						<div
							class="relative flex h-64 items-center justify-center overflow-hidden rounded-[2rem] border border-slate-300 bg-slate-200 md:col-span-2 md:row-span-2 md:h-auto"
						>
							<span class="font-bold text-slate-400">[Image: {program.gallery[0]}]</span>
						</div>

						<div
							class="relative flex h-64 items-center justify-center overflow-hidden rounded-[2rem] border border-slate-300 bg-slate-200 md:col-span-1 md:row-span-1 md:h-auto"
						>
							<span class="text-sm font-bold text-slate-400">[Image: {program.gallery[1]}]</span>
						</div>

						<div
							class="relative flex h-64 items-center justify-center overflow-hidden rounded-[2rem] border border-slate-300 bg-slate-200 md:col-span-1 md:row-span-1 md:h-auto"
						>
							<span class="text-sm font-bold text-slate-400">[Image: {program.gallery[2]}]</span>
						</div>

						<div
							class="relative flex h-64 items-center justify-center overflow-hidden rounded-[2rem] border border-slate-300 bg-slate-200 md:col-span-2 md:row-span-1 md:h-auto"
						>
							<span class="font-bold text-slate-400">[Image: {program.gallery[3]}]</span>
						</div>
					</div>
				</Reveal>
			</div>
		</section>
	</div>
{:else}
	<div class="flex h-screen items-center justify-center bg-white">
		<div class="text-center">
			<h1 class="mb-4 text-4xl font-bold text-slate-900">Program Not Found</h1>
			<Button href="/programs" variant="primary">Back to Programs</Button>
		</div>
	</div>
{/if}
