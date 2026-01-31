<script lang="ts">
	import Reveal from '$lib/components/Reveal.svelte';
	import Button from '$lib/components/Button.svelte';
	import { siteData } from '$lib/data';
	import { Users } from 'lucide-svelte';

	const { hero, mission, vision, team } = siteData.aboutPage;
</script>

<div class="overflow-x-hidden font-sans text-slate-900">
	<section class="rounded-b-[3rem] bg-[#0F172A] px-6 pt-48 pb-24 text-white md:px-12">
		<div class="mx-auto max-w-7xl">
			<Reveal>
				<span
					class="mb-8 inline-block rounded-full border border-white/20 bg-white/5 px-3 py-1 text-sm font-bold tracking-widest text-[#4ADE80] uppercase"
				>
					About Us
				</span>
				<h1 class="mb-8 max-w-4xl text-5xl leading-tight font-bold md:text-7xl">
					{hero.title}
				</h1>
				<p class="mb-16 max-w-2xl text-xl leading-relaxed text-slate-400">
					{hero.subtitle}
				</p>
			</Reveal>

			<div class="mb-16 grid grid-cols-2 gap-8 border-t border-white/10 pt-12 md:grid-cols-4">
				{#each hero.stats as stat, i}
					<Reveal delay={i * 0.1}>
						<div>
							<h3 class="mb-2 text-4xl font-extrabold text-white">{stat.value}</h3>
							<p class="text-sm font-bold tracking-widest text-slate-500 uppercase">{stat.label}</p>
						</div>
					</Reveal>
				{/each}
			</div>

			<Reveal delay={0.4}>
				<div class="relative aspect-[21/9] w-full overflow-hidden rounded-[2.5rem] bg-slate-800">
					<div class="absolute inset-0 flex items-center justify-center text-slate-600">
						[Image: {hero.image}]
					</div>
				</div>
			</Reveal>
		</div>
	</section>

	<section class="bg-white px-6 py-24 md:px-12">
		<div class="mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2">
			<Reveal>
				<span class="mb-4 block text-sm font-bold tracking-widest text-blue-600 uppercase"
					>Our Mission</span
				>
				<h2 class="mb-6 text-4xl leading-tight font-bold text-slate-900 md:text-5xl">
					{mission.title}
				</h2>
				<p class="mb-8 text-lg leading-relaxed text-slate-600">
					{mission.description}
				</p>
			</Reveal>

			<Reveal delay={0.2}>
				<div class="aspect-[4/3] overflow-hidden rounded-[2.5rem] bg-slate-100 shadow-2xl">
					<div class="flex h-full w-full items-center justify-center bg-slate-200 text-slate-400">
						[Image: {mission.image}]
					</div>
				</div>
			</Reveal>
		</div>
	</section>

	<section class="bg-slate-50 px-6 py-24 md:px-12">
		<div class="mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2">
			<Reveal delay={0.2}>
				<div
					class="order-2 aspect-[4/3] overflow-hidden rounded-[2.5rem] bg-slate-200 shadow-2xl md:order-1"
				>
					<div class="flex h-full w-full items-center justify-center bg-slate-300 text-slate-400">
						[Image: {vision.image}]
					</div>
				</div>
			</Reveal>

			<div class="order-1 md:order-2">
				<Reveal>
					<span class="mb-4 block text-sm font-bold tracking-widest text-blue-600 uppercase"
						>Our Vision</span
					>
					<h2 class="mb-6 text-4xl leading-tight font-bold text-slate-900 md:text-5xl">
						{vision.title}
					</h2>
					<p class="mb-8 text-lg leading-relaxed text-slate-600">
						{vision.description}
					</p>
				</Reveal>
			</div>
		</div>
	</section>

	<section class="bg-white px-6 py-24 md:px-12">
		<div class="mx-auto max-w-7xl">
			<Reveal>
				<div class="mb-16">
					<span class="mb-4 block text-sm font-bold tracking-widest text-blue-600 uppercase"
						>Our Team</span
					>
					<h2 class="mb-6 text-4xl font-bold text-slate-900 md:text-5xl">Our Legacy in Motion</h2>
					<p class="max-w-2xl text-lg text-slate-600">
						Meet the dedicated individuals working tirelessly to bridge the digital divide.
					</p>
				</div>
			</Reveal>

			<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{#each team as member, i}
					<Reveal delay={i * 0.1}>
						<div
							class="group relative aspect-[3/4] overflow-hidden rounded-[2rem] bg-slate-100 shadow-sm transition-all duration-500 hover:shadow-2xl"
						>
							<div
								class="absolute inset-0 flex items-center justify-center bg-slate-300 font-medium text-slate-500"
							>
								[Photo: {member.name}]
							</div>

							<div
								class="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-60 transition-opacity group-hover:opacity-80"
							></div>

							<div class="absolute bottom-0 left-0 w-full p-8">
								<h3 class="mb-1 text-2xl font-bold text-white">{member.name}</h3>
								<p class="text-sm font-bold tracking-wider text-[#4ADE80] uppercase">
									{member.role}
								</p>
							</div>
						</div>
					</Reveal>
				{/each}
			</div>
		</div>
	</section>

	<section class="bg-white px-6 py-12 pb-32 md:px-12">
		<Reveal>
			<div
				class="relative mx-auto max-w-7xl overflow-hidden rounded-[3rem] bg-slate-900 px-6 py-24 text-center"
			>
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
