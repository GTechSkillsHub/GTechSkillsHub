<script lang="ts">
	import { Motion } from 'svelte-motion';
	import { ArrowRight } from 'lucide-svelte';
	import { siteData } from '$lib/data';

	// Animation Variants
	const containerVariants = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: { staggerChildren: 0.15, delayChildren: 0.2 }
		}
	};

	const itemVariants = {
		hidden: { y: 30, opacity: 0 },
		show: {
			y: 0,
			opacity: 1,
			transition: { type: 'spring', stiffness: 40, damping: 20 }
		}
	};
</script>

<div
	class="min-h-screen overflow-x-hidden bg-white font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900"
>
	<nav
		class="mx-auto flex w-full max-w-7xl items-center justify-between border-b border-slate-100/50 px-6 py-6"
	>
		<div class="flex items-center gap-2 text-xl font-bold tracking-tighter">
			<div class="h-8 w-8 rounded-lg bg-blue-600"></div>
			{siteData.general.name}.
		</div>
		<a
			href={siteData.general.whatsapp}
			target="_blank"
			class="hidden rounded-full bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition-all hover:scale-[1.02] hover:bg-slate-800 active:scale-[0.98] md:block"
		>
			Join Community
		</a>
	</nav>

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
									>
										{program.duration}
									</span>
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
</div>
