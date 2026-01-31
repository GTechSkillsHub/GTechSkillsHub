<script lang="ts">
	import Reveal from '$lib/components/Reveal.svelte';
	import AccordionItem from '$lib/components/AccordionItem.svelte';
	import { siteData } from '$lib/data';

	const { hero, infoCards } = siteData.contactPage;
</script>

<div class="min-h-screen overflow-x-hidden bg-slate-50 font-sans text-slate-900">
	<section
		class="relative overflow-hidden rounded-b-[3rem] bg-[#0F172A] px-6 pt-48 pb-32 text-white md:px-12"
	>
		<div
			class="pointer-events-none absolute top-0 right-0 h-full w-2/3 bg-gradient-to-l from-green-900/20 to-transparent"
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

	<section class="mt-12 px-6 pb-24 md:px-12">
		<div class="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
			<div class="flex flex-col gap-6">
				<Reveal>
					<div
						class="relative h-64 overflow-hidden rounded-[2rem] border border-slate-100 bg-white shadow-lg md:h-80"
					>
						<img src="/contact.jpg" alt="Contact Us" class="h-full w-full object-cover" />
						<div
							class="absolute inset-0 -z-10 flex items-center justify-center bg-slate-200 font-medium text-slate-500"
						>
							[Image: /contact.jpg]
						</div>
					</div>
				</Reveal>

				{#each infoCards as card, i}
					<Reveal delay={0.1 + i * 0.1}>
						<a
							href={card.link}
							class="flex items-center gap-6 rounded-[2rem] border border-slate-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
						>
							<div
								class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#4ADE80] text-slate-900"
							>
								<svelte:component this={card.icon} size={24} />
							</div>
							<div>
								<h3 class="text-lg font-bold text-slate-900">{card.title}</h3>
								<p class="font-medium text-slate-500">{card.value}</p>
							</div>
						</a>
					</Reveal>
				{/each}
			</div>

			<Reveal delay={0.2}>
				<div class="h-full rounded-[2rem] border border-slate-100 bg-white p-8 shadow-xl md:p-12">
					<h2 class="mb-8 text-xl font-bold text-[#4ADE80]">Contact Information</h2>

					<form class="space-y-6">
						<div class="grid gap-6 md:grid-cols-2">
							<div class="space-y-2">
								<label for="first-name" class="ml-1 text-sm font-bold text-slate-700"
									>First Name</label
								>
								<input
									type="text"
									id="first-name"
									placeholder="Jane"
									class="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 transition-all focus:border-transparent focus:ring-2 focus:ring-[#4ADE80] focus:outline-none"
								/>
							</div>
							<div class="space-y-2">
								<label for="last-name" class="ml-1 text-sm font-bold text-slate-700"
									>Last Name</label
								>
								<input
									type="text"
									id="last-name"
									placeholder="Smith"
									class="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 transition-all focus:border-transparent focus:ring-2 focus:ring-[#4ADE80] focus:outline-none"
								/>
							</div>
						</div>

						<div class="grid gap-6 md:grid-cols-2">
							<div class="space-y-2">
								<label for="email" class="ml-1 text-sm font-bold text-slate-700">Email</label>
								<input
									type="email"
									id="email"
									placeholder="you@example.com"
									class="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 transition-all focus:border-transparent focus:ring-2 focus:ring-[#4ADE80] focus:outline-none"
								/>
							</div>
							<div class="space-y-2">
								<label for="phone" class="ml-1 text-sm font-bold text-slate-700">Phone Number</label
								>
								<input
									type="tel"
									id="phone"
									placeholder="+250..."
									class="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 transition-all focus:border-transparent focus:ring-2 focus:ring-[#4ADE80] focus:outline-none"
								/>
							</div>
						</div>

						<div class="space-y-2">
							<label for="message" class="ml-1 text-sm font-bold text-slate-700">Message</label>
							<textarea
								id="message"
								rows="4"
								placeholder="Let's work together!"
								class="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 transition-all focus:border-transparent focus:ring-2 focus:ring-[#4ADE80] focus:outline-none"
							></textarea>
						</div>

						<button
							type="submit"
							class="w-full rounded-xl bg-[#4ADE80] py-4 font-bold text-slate-900 shadow-lg shadow-green-900/10 transition-all hover:scale-[1.02] hover:bg-[#22c55e]"
						>
							Submit Message
						</button>
					</form>
				</div>
			</Reveal>
		</div>
	</section>

	<section class="px-6 pb-24 md:px-12">
		<div
			class="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border border-slate-100 bg-white p-2 shadow-xl"
		>
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15945.85672206775!2d30.822819875953535!3d-2.348639206109951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19c4c4784a0d8435%3A0x2a975003c003264c!2sMahama%20Refugee%20Camp!5e0!3m2!1sen!2srw!4v1714400000000!5m2!1sen!2srw"
				width="100%"
				height="450"
				style="border:0; border-radius: 2rem;"
				allowfullscreen={true}
				loading="lazy"
				referrerpolicy="no-referrer-when-downgrade"
			>
			</iframe>
		</div>
	</section>

	<section class="rounded-t-[3rem] bg-white px-6 py-24 md:px-12">
		<div class="mx-auto max-w-3xl">
			<Reveal>
				<div class="mb-16 text-center">
					<span class="mb-4 block text-sm font-bold tracking-widest text-[#4ADE80] uppercase"
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
</div>
