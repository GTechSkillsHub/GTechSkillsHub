<script lang="ts">
	import { Motion } from 'svelte-motion';
	import { siteData } from '$lib/data';
	import { CheckCircle2, Clock, Users } from 'lucide-svelte';

	const containerVariants = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: { staggerChildren: 0.1 }
		}
	};

	const cardVariants = {
		hidden: { y: 20, opacity: 0 },
		show: {
			y: 0,
			opacity: 1,
			transition: { type: 'spring', stiffness: 50, damping: 20 }
		}
	};
</script>

<div class="min-h-screen overflow-x-hidden bg-white pb-32 font-sans">
	<div class="mx-auto max-w-7xl px-6 pt-32 pb-24 md:px-12">
		<Motion
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			let:motion
		>
			<div use:motion class="max-w-3xl">
				<h1
					class="mb-8 text-5xl leading-tight font-extrabold tracking-tight text-slate-900 md:text-7xl"
				>
					Future-Ready <br />
					<span class="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent"
						>Curriculum.</span
					>
				</h1>
				<p class="max-w-2xl text-xl leading-relaxed text-slate-600">
					Our programs are designed to take you from zero to job-ready. Free, hands-on, and tailored
					for the real world.
				</p>
			</div>
		</Motion>
	</div>

	<div class="mx-auto max-w-7xl px-4 md:px-12">
		<Motion initial="hidden" animate="show" variants={containerVariants} let:motion>
			<div use:motion class="grid gap-6 md:grid-cols-2 md:gap-10">
				{#each siteData.programs as program}
					<Motion variants={cardVariants} let:motion>
						<div
							use:motion
							class="group relative flex h-full w-full flex-col rounded-3xl border border-slate-100 bg-slate-50 p-6 transition-all duration-300 hover:border-blue-100 hover:shadow-2xl hover:shadow-blue-100/50 md:rounded-[2rem] md:p-10"
						>
							<div class="mb-8 flex flex-wrap items-start justify-between gap-4">
								<div
									class="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl border border-slate-100 bg-white text-blue-600 shadow-sm"
								>
									<svelte:component this={program.icon} size={32} strokeWidth={1.5} />
								</div>

								<div
									class="flex shrink-0 items-center gap-3 rounded-full border border-slate-100 bg-white px-4 py-2 shadow-sm md:px-6 md:py-3"
								>
									<Clock size={16} class="text-slate-400" />
									<span class="text-sm font-bold tracking-wide whitespace-nowrap text-slate-700"
										>{program.duration}</span
									>
								</div>
							</div>

							<h2
								class="mb-4 text-2xl font-bold tracking-tight break-words text-slate-900 transition-colors group-hover:text-blue-600 md:text-3xl"
							>
								{program.title}
							</h2>

							<p
								class="mb-8 flex-grow text-base leading-relaxed text-slate-600 md:mb-10 md:text-lg"
							>
								{program.description}
							</p>

							<div class="mb-8 h-px w-full bg-slate-200/60"></div>

							<div class="mb-8 space-y-6 md:mb-10 md:space-y-8">
								<div>
									<div
										class="mb-3 flex items-center gap-2 text-xs font-bold tracking-widest text-slate-400 uppercase"
									>
										<Users size={14} />
										Who is this for?
									</div>
									<p class="text-base font-medium text-slate-900 md:text-lg">
										{program.audience}
									</p>
								</div>

								<div>
									<div
										class="mb-4 flex items-center gap-2 text-xs font-bold tracking-widest text-slate-400 uppercase"
									>
										<CheckCircle2 size={14} />
										Skills you gain
									</div>
									<div class="flex flex-wrap gap-2">
										{#each program.outcomes as outcome}
											<span
												class="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-600 shadow-sm md:px-4 md:py-2"
											>
												{outcome}
											</span>
										{/each}
									</div>
								</div>
							</div>

							<div class="mt-auto w-full pt-2 md:pt-4">
								<a
									href="/contact"
									class="flex w-full items-center justify-center rounded-xl bg-slate-900 py-3.5 text-sm font-bold text-white shadow-lg shadow-slate-200 transition-all group-hover:shadow-blue-200 hover:-translate-y-1 hover:bg-blue-600 md:py-4 md:text-base"
								>
									Apply for this Program
								</a>
							</div>
						</div>
					</Motion>
				{/each}
			</div>
		</Motion>
	</div>

	<div class="mx-auto mt-24 max-w-3xl px-6 text-center md:mt-40">
		<h3 class="mb-6 text-2xl font-bold text-slate-900 md:text-3xl">Not sure where to start?</h3>
		<p class="mb-8 text-lg text-slate-600">
			Our team can help assess your skills and place you in the right cohort.
		</p>
		<a
			href="/contact"
			class="inline-flex items-center text-lg font-bold text-blue-600 transition-all hover:gap-3"
		>
			Contact Admissions
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="20"
				height="20"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="ml-2"
				><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"
				></polyline></svg
			>
		</a>
	</div>
</div>
