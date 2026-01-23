<script lang="ts">
	import { Motion } from 'svelte-motion';
	import { siteData } from '$lib/data';
	import { Linkedin, Mail, ArrowUpRight } from 'lucide-svelte';

	const containerVariants = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: { staggerChildren: 0.2 }
		}
	};

	const cardVariants = {
		hidden: { y: 30, opacity: 0 },
		show: {
			y: 0,
			opacity: 1,
			transition: { type: 'spring', stiffness: 40, damping: 20 }
		}
	};
</script>

<div class="min-h-screen bg-white pb-32 font-sans">
	<div class="mx-auto max-w-7xl px-6 pt-32 pb-24 md:px-12">
		<Motion
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6 }}
			let:motion
		>
			<div use:motion class="max-w-4xl">
				<h1
					class="mb-8 text-5xl leading-tight font-extrabold tracking-tight text-slate-900 md:text-7xl"
				>
					Meet the <br />
					<span class="text-blue-600">Visionaries.</span>
				</h1>
				<p class="max-w-2xl text-xl leading-relaxed text-slate-600">
					We are a team of students, engineers, and changemakers from Ashesi University, united by a
					single mission: to bridge the digital divide in Rwanda.
				</p>
			</div>
		</Motion>
	</div>

	<div class="mx-auto mb-32 max-w-7xl px-6 md:px-12">
		<Motion initial="hidden" animate="show" variants={containerVariants} let:motion>
			<div use:motion class="grid gap-12 md:grid-cols-2 lg:gap-16">
				{#each siteData.team.founders as member}
					<Motion variants={cardVariants} let:motion>
						<div use:motion class="group">
							<div
								class="relative mb-8 aspect-[4/5] w-full overflow-hidden rounded-[2rem] border border-slate-100 bg-slate-100 md:aspect-square"
							>
								<div
									class="absolute inset-0 flex items-center justify-center bg-slate-200 text-slate-400"
								>
									<span class="text-lg font-medium tracking-widest uppercase"
										>Photo Placeholder</span
									>
								</div>

								<div
									class="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
								></div>
							</div>

							<div class="pr-0 md:pr-10">
								<div class="mb-4 flex items-start justify-between">
									<div>
										<h2 class="mb-1 text-3xl font-bold tracking-tight text-slate-900">
											{member.name}
										</h2>
										<p class="text-xs font-bold tracking-wide text-blue-600 uppercase">
											{member.title}
										</p>
									</div>

									<a
										href={siteData.general.socials.linkedin}
										target="_blank"
										class="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 text-slate-400 transition-all hover:border-blue-600 hover:bg-blue-600 hover:text-white"
									>
										<Linkedin size={20} />
									</a>
								</div>

								<div class="mb-6 h-px w-full bg-slate-200/60"></div>

								<p class="text-lg leading-relaxed text-slate-600">
									{member.bio}
								</p>
							</div>
						</div>
					</Motion>
				{/each}
			</div>
		</Motion>
	</div>

	<div class="mx-auto max-w-7xl px-6 md:px-12">
		<div class="relative overflow-hidden rounded-[2.5rem] bg-slate-900 p-10 text-center md:p-20">
			<div
				class="pointer-events-none absolute top-0 right-0 h-96 w-96 bg-blue-600 opacity-20 blur-[150px]"
			></div>
			<div
				class="pointer-events-none absolute bottom-0 left-0 h-96 w-96 bg-purple-600 opacity-10 blur-[150px]"
			></div>

			<div class="relative z-10 mx-auto max-w-3xl">
				<h2 class="mb-6 text-3xl font-bold tracking-tight text-white md:text-5xl">
					Want to join our mission?
				</h2>
				<p class="mb-12 text-lg leading-relaxed text-slate-400 md:text-xl">
					We are always looking for mentors, partners, and volunteers who are passionate about
					education and technology in Africa.
				</p>

				<div class="flex flex-wrap justify-center gap-4">
					<a
						href="/contact"
						class="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-bold text-slate-900 transition-colors hover:bg-blue-600 hover:text-white"
					>
						Get in Touch
					</a>
					<a
						href="mailto:{siteData.general.email}"
						class="inline-flex items-center gap-2 rounded-xl border border-slate-700 px-8 py-4 font-bold text-white transition-colors hover:bg-slate-800"
					>
						<Mail size={18} />
						Email Us
					</a>
				</div>
			</div>
		</div>
	</div>
</div>
