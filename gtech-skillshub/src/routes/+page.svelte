<script lang="ts">
	import Reveal from '$lib/components/Reveal.svelte';
	import Button from '$lib/components/Button.svelte';
	import AccordionItem from '$lib/components/AccordionItem.svelte';
	import { siteData } from '$lib/data';
	import { Play, Rocket, Users, ArrowRight } from 'lucide-svelte';

	// FIX: Destructure correctly based on data.ts
	// Use 'about' instead of 'mission', and extract 'stats' from 'impact'
	const { hero, about, supporters, impact } = siteData.home;
</script>

<div class="overflow-x-hidden font-sans text-slate-900">
	<section class="relative flex h-screen min-h-[600px] items-center">
		<div class="absolute inset-0 z-0">
			<img src="/hero-image.jpg" alt="Hero Background" class="h-full w-full object-cover" />
			<div class="absolute inset-0 bg-slate-900/60"></div>
		</div>

		<div class="relative z-10 mx-auto w-full max-w-7xl px-6 pt-20 md:px-12">
			<Reveal>
				<div class="max-w-3xl">
					<h1
						class="mb-8 text-6xl leading-[0.95] font-extrabold tracking-tight text-white md:text-8xl"
					>
						{#each hero.title.split('.') as phrase}
							{#if phrase.trim()}
								<span class="block">{phrase.trim()}.</span>
							{/if}
						{/each}
					</h1>

					<p class="mb-10 max-w-xl text-xl leading-relaxed text-slate-200 md:text-2xl">
						{hero.subtitle}
					</p>

					<div class="flex flex-wrap items-center gap-4">
						<a
							href="/donate"
							class="inline-flex items-center justify-center rounded-full bg-[#4ADE80] px-8 py-4 text-lg font-bold text-slate-900 shadow-lg shadow-green-900/20 transition-all hover:scale-105 hover:bg-[#22c55e]"
						>
							{hero.buttons.primary}
						</a>
						<button
							class="inline-flex items-center justify-center gap-3 rounded-full bg-white px-8 py-4 text-lg font-bold text-slate-900 transition-all hover:bg-slate-100"
						>
							<Play size={20} fill="currentColor" />
							{hero.buttons.secondary}
						</button>
					</div>
				</div>
			</Reveal>
		</div>
	</section>

	<section class="overflow-hidden bg-white px-6 py-24 md:px-12">
		<div class="mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2">
			<div>
				<Reveal>
					<span class="mb-4 block text-sm font-bold tracking-widest text-blue-600 uppercase">
						{about.tag}
					</span>
					<h2 class="mb-6 text-4xl leading-[1.1] font-bold text-slate-900 md:text-5xl">
						{about.title}
					</h2>
					<p class="mb-8 text-lg leading-relaxed text-slate-600">
						{about.description}
					</p>
					<Button href="/about" variant="outline">
						Learn More <ArrowRight size={18} />
					</Button>
				</Reveal>
			</div>
			<Reveal delay={0.2}>
				<div class="relative">
					<div class="aspect-[4/3] overflow-hidden rounded-[2.5rem] bg-slate-100 shadow-2xl">
						<div class="flex h-full w-full items-center justify-center bg-slate-200 text-slate-400">
							[Image: {about.image}]
						</div>
					</div>
				</div>
			</Reveal>
		</div>
	</section>

	<section class="border-y border-slate-100 bg-slate-50/50 py-12">
		<div class="mx-auto max-w-7xl px-6 text-center md:px-12">
			<Reveal>
				<p class="mb-8 text-sm font-bold tracking-widest text-slate-400 uppercase">
					{supporters.title}
				</p>
				<div
					class="flex flex-wrap items-center justify-center gap-12 opacity-60 grayscale transition-all duration-500 hover:grayscale-0 md:gap-20"
				>
					{#each supporters.logos as logo}
						<div class="flex items-center gap-2 text-2xl font-bold text-slate-800">
							<div class="h-8 w-8 rounded-full bg-slate-300"></div>
							{logo}
						</div>
					{/each}
				</div>
			</Reveal>
		</div>
	</section>

	<section class="bg-white px-6 py-24 md:px-12">
		<div class="mx-auto max-w-7xl">
			<Reveal>
				<div class="mb-16 max-w-2xl">
					<span class="mb-4 block text-sm font-bold tracking-widest text-blue-600 uppercase"
						>Our Impact</span
					>
					<h2 class="mb-4 text-4xl font-bold text-slate-900">{impact.title}</h2>
					<p class="text-lg text-slate-600">{impact.subtitle}</p>
				</div>
			</Reveal>

			<div class="grid gap-8 md:grid-cols-3">
				{#each impact.stats as stat, i}
					<Reveal delay={i * 0.1}>
						<div
							class="rounded-[2rem] border border-slate-100 bg-slate-50 p-10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
						>
							<div
								class="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-blue-600 shadow-sm"
							>
								<Rocket size={32} />
							</div>
							<h3 class="mb-2 text-5xl font-extrabold text-slate-900">{stat.value}</h3>
							<p class="mb-1 text-xl font-bold text-slate-700">{stat.label}</p>
							<p class="text-slate-500">{stat.sub}</p>
						</div>
					</Reveal>
				{/each}
			</div>
		</div>
	</section>

	<section class="bg-slate-50 px-6 py-24 md:px-12">
		<div class="mx-auto max-w-7xl">
			<Reveal>
				<div class="mb-12 flex items-end justify-between">
					<div>
						<span class="mb-4 block text-sm font-bold tracking-widest text-blue-600 uppercase"
							>Programs</span
						>
						<h2 class="mb-4 text-4xl font-bold text-slate-900">Spark Positive Change</h2>
						<p class="text-slate-600">
							Our efforts provide care, skills, and support igniting hope.
						</p>
					</div>
					<a href="/programs" class="hidden font-bold text-blue-600 hover:underline md:block"
						>View All Programs</a
					>
				</div>
			</Reveal>

			<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
				{#each siteData.programs.slice(0, 3) as program, i}
					<Reveal delay={i * 0.1}>
						<a
							href="/programs"
							class="group relative flex h-full flex-col rounded-[2rem] border border-slate-100 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-100/50"
						>
							<div class="relative mb-6 h-48 overflow-hidden rounded-2xl bg-slate-100">
								<div
									class="absolute inset-0 flex items-center justify-center text-sm font-medium text-slate-400"
								>
									[Program Image]
								</div>
							</div>
							<div class="mb-4 flex items-center justify-between">
								<span
									class="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold tracking-wider text-blue-600 uppercase"
								>
									{program.duration}
								</span>
							</div>
							<h3 class="mb-3 text-2xl font-bold transition-colors group-hover:text-blue-600">
								{program.title}
							</h3>
							<p class="mb-6 line-clamp-3 flex-grow text-slate-600">{program.description}</p>
							<div
								class="mt-auto flex items-center border-t border-slate-100 pt-6 font-bold text-blue-600"
							>
								Learn More <ArrowRight
									size={18}
									class="ml-2 transition-transform group-hover:translate-x-1"
								/>
							</div>
						</a>
					</Reveal>
				{/each}
			</div>
		</div>
	</section>
	<section class="bg-white px-6 py-24 md:px-12">
		<div class="mx-auto max-w-7xl">
			<Reveal>
				<div class="mb-16 max-w-2xl">
					<span class="mb-4 block text-sm font-bold tracking-widest text-blue-600 uppercase"
						>Get Involved</span
					>
					<h2 class="mb-4 text-4xl font-bold text-slate-900">{siteData.home.help.title}</h2>
					<p class="text-lg text-slate-600">{siteData.home.help.subtitle}</p>
				</div>
			</Reveal>

			<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
				{#each siteData.home.help.cards as card, i}
					<Reveal delay={i * 0.1}>
						<div
							class="group h-full rounded-[2rem] border border-slate-100 bg-slate-50 p-8 transition-all duration-300 hover:bg-white hover:shadow-xl"
						>
							<div
								class="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-slate-900 shadow-sm transition-colors group-hover:bg-blue-600 group-hover:text-white"
							>
								<svelte:component this={card.icon} size={28} />
							</div>
							<h3 class="mb-3 text-xl font-bold text-slate-900">{card.title}</h3>
							<p class="leading-relaxed text-slate-600">{card.desc}</p>
						</div>
					</Reveal>
				{/each}
			</div>
		</div>
	</section>

	<section class="bg-slate-50 px-6 py-24 md:px-12">
		<div class="mx-auto max-w-7xl">
			<Reveal>
				<div class="mb-12 flex items-end justify-between">
					<div>
						<span class="mb-4 block text-sm font-bold tracking-widest text-blue-600 uppercase"
							>Oppoortunities Hub</span
						>
						<h2 class="text-4xl font-bold text-slate-900">Latest Opportunities</h2>
						<p class="mt-2 text-slate-600">
							Scholarships, Fellowships, and Grants curated for you.
						</p>
					</div>
					<Button href="/opportunities" variant="outline">View All</Button>
				</div>
			</Reveal>

			<div class="grid gap-8 md:grid-cols-3">
				{#each siteData.opportunities.slice(0, 3) as opp, i}
					<Reveal delay={i * 0.1}>
						<a href="/opportunities/{opp.id}" class="group block flex h-full flex-col">
							<div
								class="relative mb-6 aspect-[16/10] overflow-hidden rounded-[2rem] border border-slate-100 bg-white shadow-sm"
							>
								<div
									class="absolute inset-0 flex items-center justify-center text-sm font-bold text-slate-400"
								>
									[Image: {opp.image}]
								</div>
								<div
									class="absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold tracking-widest text-blue-600 uppercase shadow-sm backdrop-blur"
								>
									{opp.category}
								</div>
							</div>

							<h3
								class="mb-2 text-xl leading-tight font-bold text-slate-900 transition-colors group-hover:text-blue-600"
							>
								{opp.title}
							</h3>

							<p class="mb-4 line-clamp-2 flex-grow text-sm text-slate-500">
								{opp.description}
							</p>

							<p
								class="mt-auto flex items-center gap-2 text-sm font-bold tracking-wider text-blue-600 uppercase"
							>
								View Details <ArrowRight
									size={16}
									class="transition-transform group-hover:translate-x-1"
								/>
							</p>
						</a>
					</Reveal>
				{/each}
			</div>
		</div>
	</section>

	<section class="border-y border-slate-100 bg-white px-6 py-24 md:px-12">
		<div class="mx-auto grid max-w-7xl items-start gap-16 lg:grid-cols-2">
			<Reveal>
				<div class="sticky top-24">
					<span class="mb-4 block text-sm font-bold tracking-widest text-blue-600 uppercase"
						>Testimonials</span
					>
					<h2 class="mb-6 text-4xl leading-tight font-bold text-slate-900 md:text-5xl">
						{siteData.home.testimonials.title}
					</h2>
					<p class="mb-8 max-w-md text-lg leading-relaxed text-slate-600">
						{siteData.home.testimonials.subtitle}
					</p>
					<Button href="/impact" variant="outline">Read All Stories</Button>
				</div>
			</Reveal>

			<div class="grid gap-8">
				{#each siteData.home.testimonials.items as item, i}
					<Reveal delay={i * 0.2}>
						<div class="relative rounded-[2.5rem] bg-slate-50 p-10">
							<div class="absolute top-8 right-8 text-blue-200">
								<svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor"
									><path
										d="M14.017 21L14.017 18C14.017 16.896 14.321 15.923 14.929 15.081C15.537 14.239 16.354 13.535 17.379 12.969L17.379 11.969C16.354 11.969 15.602 11.666 15.122 11.06C14.642 10.454 14.402 9.688 14.402 8.761C14.402 7.813 14.652 7.025 15.152 6.396C15.652 5.767 16.368 5.453 17.3 5.453C18.232 5.453 18.964 5.776 19.496 6.422C20.028 7.068 20.294 7.856 20.294 8.788C20.294 9.876 19.957 10.99 19.283 12.129C18.609 13.268 17.652 14.505 16.412 15.841L15.358 16.929L14.017 21ZM3.729 21L3.729 18C3.729 16.896 4.033 15.923 4.641 15.081C5.249 14.239 6.066 13.535 7.091 12.969L7.091 11.969C6.066 11.969 5.314 11.666 4.834 11.06C4.354 10.454 4.114 9.688 4.114 8.761C4.114 7.813 4.364 7.025 4.864 6.396C5.364 5.767 6.08 5.453 7.012 5.453C7.944 5.453 8.676 5.776 9.208 6.422C9.74 7.068 10.006 7.856 10.006 8.788C10.006 9.876 9.669 10.99 8.995 12.129C8.321 13.268 7.364 14.505 6.124 15.841L5.07 16.929L3.729 21Z"
									></path></svg
								>
							</div>

							<p
								class="relative z-10 mb-8 text-xl leading-relaxed font-medium text-slate-900 md:text-2xl"
							>
								"{item.quote}"
							</p>

							<div class="flex items-center gap-4">
								<div class="h-12 w-12 overflow-hidden rounded-full bg-slate-200"></div>
								<div>
									<h4 class="font-bold text-slate-900">{item.author}</h4>
									<p class="text-sm font-bold tracking-wider text-slate-500 uppercase">
										{item.role}
									</p>
								</div>
							</div>
						</div>
					</Reveal>
				{/each}
			</div>
		</div>
	</section>

	<section class="bg-white px-6 py-24 md:px-12">
		<div class="mx-auto max-w-3xl">
			<Reveal>
				<div class="mb-16 text-center">
					<span class="mb-4 block text-sm font-bold tracking-widest text-blue-600 uppercase"
						>FAQ</span
					>
					<h2 class="mb-4 text-4xl font-bold text-slate-900">
						What You're Thinking,<br />We've Answered.
					</h2>
				</div>
			</Reveal>

			<Reveal delay={0.2}>
				<div
					class="rounded-[2rem] border border-slate-100 bg-white p-8 shadow-2xl shadow-slate-200/50 md:p-12"
				>
					{#each siteData.home.faq as item}
						<AccordionItem question={item.question}>
							{item.answer}
						</AccordionItem>
					{/each}
				</div>
			</Reveal>
		</div>
	</section>

	<section class="bg-white px-6 py-12 pb-32 md:px-12">
		<Reveal>
			<div
				class="relative mx-auto max-w-7xl overflow-hidden rounded-[3rem] bg-slate-900 px-6 py-24 text-center"
			>
				<div class="absolute inset-0 opacity-40">
					<img
						src="/hero-image.jpg"
						alt="Background"
						class="h-full w-full object-cover grayscale"
					/>
				</div>

				<div class="relative z-10 mx-auto max-w-3xl">
					<h2 class="mb-6 text-4xl font-extrabold tracking-tight text-white md:text-6xl">
						{siteData.home.cta.title}
					</h2>
					<p class="mb-10 text-xl leading-relaxed text-slate-300">
						{siteData.home.cta.subtitle}
					</p>

					<div
						class="mb-10 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 font-bold text-white backdrop-blur"
					>
						<Users size={18} />
						{siteData.home.cta.stat}
					</div>

					<div class="flex justify-center">
						<a
							href="/donate"
							class="inline-flex items-center justify-center rounded-full bg-[#4ADE80] px-10 py-5 text-xl font-bold text-slate-900 shadow-2xl transition-all hover:scale-105 hover:bg-[#22c55e]"
						>
							Donate Now
						</a>
					</div>
				</div>
			</div>
		</Reveal>
	</section>
</div>
