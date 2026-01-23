<script lang="ts">
	import { Motion } from 'svelte-motion';
	import {
		Terminal,
		Rocket,
		Users,
		ArrowRight,
		ChevronLeft,
		ChevronRight,
		Quote
	} from 'lucide-svelte';
	import { siteData } from '$lib/data';

	// ANIMATION VARIANTS
	const containerVariants = {
		hidden: { opacity: 0 },
		show: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
	};

	const itemVariants = {
		hidden: { y: 30, opacity: 0 },
		show: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 40, damping: 20 } }
	};

	// CAROUSEL LOGIC
	let currentTestimonialIndex = 0;

	const nextTestimonial = () => {
		currentTestimonialIndex = (currentTestimonialIndex + 1) % siteData.testimonials.length;
	};

	const prevTestimonial = () => {
		currentTestimonialIndex =
			(currentTestimonialIndex - 1 + siteData.testimonials.length) % siteData.testimonials.length;
	};
</script>

<div class="relative overflow-hidden">
	<main class="relative z-10 mx-auto max-w-7xl px-6 pt-16 pb-20 md:pt-32">
		<Motion initial="hidden" animate="show" variants={containerVariants} let:motion>
			<div use:motion class="max-w-4xl">
				<Motion variants={itemVariants} let:motion>
					<div use:motion class="mb-6">
						<span
							class="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-bold tracking-widest text-slate-600 uppercase"
						>
							<span class="h-2 w-2 animate-pulse rounded-full bg-blue-500"></span>
							{siteData.hero.badge}
						</span>
					</div>
				</Motion>

				<Motion variants={itemVariants} let:motion>
					<h1
						use:motion
						class="mb-8 text-5xl leading-[1.1] font-extrabold tracking-tight text-slate-900 md:text-7xl lg:text-7xl"
					>
						{siteData.hero.headline}
					</h1>
				</Motion>

				<Motion variants={itemVariants} let:motion>
					<p use:motion class="mb-10 max-w-2xl text-lg leading-relaxed text-slate-600 md:text-xl">
						{siteData.hero.subheadline}
					</p>
				</Motion>

				<Motion variants={itemVariants} let:motion>
					<div use:motion class="flex flex-col gap-4 sm:flex-row">
						<a
							href="/programs"
							class="flex items-center justify-center rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white shadow-xl shadow-blue-200/50 transition-all hover:-translate-y-1 hover:bg-blue-700"
						>
							Apply to Programs
						</a>
						<a
							href="/partners"
							class="flex items-center justify-center rounded-xl border border-slate-200 bg-white px-8 py-4 font-semibold text-slate-700 transition-all hover:border-slate-300 hover:bg-slate-50"
						>
							Partner With Us
						</a>
					</div>
				</Motion>

				<Motion variants={itemVariants} let:motion>
					<div
						use:motion
						class="mt-24 grid grid-cols-2 gap-8 border-t border-slate-100 pt-10 md:grid-cols-4"
					>
						<div>
							<div class="text-4xl font-bold tracking-tight text-slate-900">
								{siteData.impact.youthTrained}
							</div>
							<div class="mt-1 text-sm font-medium text-slate-500">
								{siteData.impact.youthTrainedLabel}
							</div>
						</div>
						<div>
							<div class="text-4xl font-bold tracking-tight text-slate-900">
								{siteData.impact.programs}
							</div>
							<div class="mt-1 text-sm font-medium text-slate-500">Programs</div>
						</div>
						<div>
							<div class="text-4xl font-bold tracking-tight text-slate-900">
								{siteData.impact.communities}
							</div>
							<div class="mt-1 text-sm font-medium text-slate-500">Communities Served</div>
						</div>
					</div>
				</Motion>
			</div>
		</Motion>
	</main>

	<div
		class="pointer-events-none fixed top-0 right-0 -z-10 h-[50vh] w-[50vw] rounded-bl-full bg-gradient-to-b from-blue-50 to-transparent opacity-60 blur-3xl"
	></div>
</div>

<div class="h-32"></div>

<div class="mx-auto max-w-7xl px-6">
	<Motion
		initial={{ opacity: 0, y: 50 }}
		{...{ whileInView: { opacity: 1, y: 0 } }}
		{...{ viewport: { once: true, margin: '-100px' } }}
		transition={{ duration: 0.6 }}
		let:motion
	>
		<section use:motion class="mb-32">
			<div class="mb-12">
				<h2 class="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">Our Programs</h2>
				<div class="h-1 w-20 rounded-full bg-blue-600"></div>
			</div>

			<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
				{#each siteData.programs as program}
					<div
						class="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-100 bg-slate-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
					>
						<div
							class="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
						></div>

						<div class="relative z-10 flex h-full flex-col">
							<div
								class="mb-6 flex h-12 w-12 items-center justify-center rounded-lg border border-slate-100 bg-white text-blue-600 shadow-sm"
							>
								<svelte:component this={program.icon} size={24} strokeWidth={1.5} />
							</div>

							<h3 class="mb-3 text-lg font-bold text-slate-900">{program.title}</h3>
							<p class="mb-6 flex-grow text-sm leading-relaxed text-slate-600">
								{program.description}
							</p>

							<div class="mb-4">
								<span
									class="rounded-md border border-slate-200 bg-white px-2 py-1 text-xs font-semibold text-slate-500"
									>{program.duration}</span
								>
							</div>

							<a
								href="/programs"
								class="mt-auto inline-flex items-center gap-2 text-sm font-bold text-blue-600 transition-transform group-hover:translate-x-1"
							>
								View Details <ArrowRight size={16} />
							</a>
						</div>
					</div>
				{/each}
			</div>
		</section>
	</Motion>
</div>

<Motion
	initial={{ opacity: 0 }}
	{...{ whileInView: { opacity: 1 } }}
	{...{ viewport: { once: true } }}
	let:motion
>
	<section use:motion class="relative mb-[-80px] overflow-hidden bg-slate-900 py-24">
		<div
			class="pointer-events-none absolute top-0 left-0 h-64 w-64 bg-blue-600 opacity-20 blur-[120px]"
		></div>
		<div
			class="pointer-events-none absolute right-0 bottom-0 h-64 w-64 bg-purple-600 opacity-20 blur-[120px]"
		></div>

		<div class="relative z-10 mx-auto max-w-4xl px-6">
			<div class="mb-10 flex justify-center text-blue-500 opacity-80">
				<Quote size={48} fill="currentColor" strokeWidth={0} />
			</div>

			<div class="flex min-h-[250px] flex-col items-center justify-center text-center">
				{#key currentTestimonialIndex}
					<div class="animate-in fade-in slide-in-from-bottom-4 duration-500">
						<h3
							class="mx-auto mb-8 max-w-3xl text-2xl leading-relaxed font-medium text-white md:text-3xl lg:text-4xl"
						>
							"{siteData.testimonials[currentTestimonialIndex].quote}"
						</h3>

						<div class="flex flex-col items-center">
							<div
								class="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-lg font-bold text-white shadow-lg"
							>
								{siteData.testimonials[currentTestimonialIndex].author.charAt(0)}
							</div>
							<div class="text-lg font-bold tracking-wide text-white">
								{siteData.testimonials[currentTestimonialIndex].author}
							</div>
							<div class="mt-1 text-sm text-xs tracking-widest text-slate-400 uppercase">
								{siteData.testimonials[currentTestimonialIndex].role}
							</div>
						</div>
					</div>
				{/key}
			</div>

			<div class="mt-12 flex justify-center gap-4 pb-20">
				<button
					on:click={prevTestimonial}
					class="rounded-full border border-slate-700 p-3 text-slate-300 transition-all hover:bg-white hover:text-slate-900"
				>
					<ChevronLeft size={24} />
				</button>
				<button
					on:click={nextTestimonial}
					class="rounded-full border border-slate-700 p-3 text-slate-300 transition-all hover:bg-white hover:text-slate-900"
				>
					<ChevronRight size={24} />
				</button>
			</div>
		</div>
	</section>
</Motion>
