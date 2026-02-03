<script lang="ts">
	import { page } from '$app/stores';
	import { siteData } from '$lib/data';
	import Reveal from '$lib/components/Reveal.svelte';
	import Button from '$lib/components/Button.svelte';
	import { Calendar, CheckCircle, ExternalLink, ArrowLeft } from 'lucide-svelte';

	$: opp = siteData.opportunities.find((o) => o.id === $page.params.slug);
</script>

{#if opp}
	<div class="min-h-screen overflow-x-hidden bg-white font-sans text-slate-900">
		<section class="bg-slate-50 px-6 pt-40 pb-12 md:px-12">
			<div class="mx-auto max-w-4xl text-center">
				<a
					href="/opportunities"
					class="mb-8 inline-flex items-center text-sm font-bold tracking-widest text-slate-500 uppercase transition-colors hover:text-blue-600"
				>
					<ArrowLeft size={16} class="mr-2" /> Back to Hub
				</a>

				<h1 class="mb-6 text-3xl leading-tight font-bold text-slate-900 md:text-5xl">
					{opp.title}
				</h1>

				<div
					class="flex items-center justify-center gap-6 text-sm font-bold tracking-wider text-slate-500 uppercase"
				>
					<span class="text-blue-600">{opp.category}</span>
					<span>•</span>
					<span>{opp.provider}</span>
					<span>•</span>
					<span>Deadline: {opp.deadline}</span>
				</div>
			</div>
		</section>

		<section class="-mt-8 mb-16 px-6 md:px-12">
			<div
				class="relative mx-auto h-[400px] max-w-5xl overflow-hidden rounded-[2.5rem] bg-slate-200 shadow-2xl md:h-[500px]"
			>
				<div
					class="absolute inset-0 flex items-center justify-center text-2xl font-bold text-slate-400"
				>
					[Image: {opp.image}]
				</div>
			</div>
		</section>

		<section class="px-6 pb-32 md:px-12">
			<div class="mx-auto max-w-3xl">
				<Reveal>
					<p class="mb-12 text-xl leading-relaxed font-medium text-slate-600 md:text-2xl">
						{opp.description}
					</p>

					<div class="prose prose-lg mb-12 prose-slate">
						<h3 class="mb-4 text-2xl font-bold text-slate-900">About this Opportunity</h3>
						<p class="mb-8 leading-relaxed text-slate-600">
							{opp.fullDescription}
						</p>
					</div>

				{#if opp.eligibility?.length}
				<div class="mb-12 rounded-[2rem] border border-slate-100 bg-slate-50 p-8 md:p-10">
					<h3 class="mb-6 text-xl font-bold text-slate-900">Eligibility Criteria</h3>
					<ul class="space-y-4">
						{#each opp.eligibility as criteria, i (i)}
							<li class="flex items-start gap-3">
								<CheckCircle class="mt-1 shrink-0 text-[#4ADE80]" />
								<span class="font-medium text-slate-700">{criteria}</span>
							</li>
						{/each}
					</ul>
				</div>
				{/if}

				<div class="mb-16">
					<h3 class="mb-4 text-2xl font-bold text-slate-900">Value / Award</h3>
					<p class="text-lg font-bold text-blue-600">{opp.value}</p>
				</div>
					<div
						class="flex flex-col items-center justify-between gap-6 border-t border-slate-100 pt-12 md:flex-row"
					>
						<div>
							<p class="font-bold text-slate-900">Ready to take the next step?</p>
							<p class="text-sm text-slate-500">Applications are reviewed on a rolling basis.</p>
						</div>
						<a
							href={opp.applyLink}
							target="_blank"
							rel="noopener noreferrer"
							class="inline-flex items-center justify-center rounded-full bg-[#4ADE80] px-8 py-4 text-lg font-bold text-slate-900 shadow-lg shadow-green-900/10 transition-all hover:scale-105 hover:bg-[#22c55e]"
						>
							Apply on Official Site <ExternalLink size={20} class="ml-2" />
						</a>
					</div>
				</Reveal>
			</div>
		</section>
	</div>
{:else}
	<div class="flex h-screen items-center justify-center bg-white">
		<div class="text-center">
			<h1 class="mb-4 text-4xl font-bold text-slate-900">Opportunity Not Found</h1>
			<Button href="/opportunities" variant="primary">Back to Hub</Button>
		</div>
	</div>
{/if}
