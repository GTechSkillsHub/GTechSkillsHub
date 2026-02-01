<script lang="ts">
	import { siteData } from '$lib/data';
	import { Instagram, Linkedin, MessageCircle, ArrowRight } from 'lucide-svelte';
</script>

<footer class="relative overflow-hidden bg-slate-900 pt-20 pb-0 text-white">
	<div class="relative z-20 mx-auto mb-20 grid max-w-7xl gap-12 px-6 md:grid-cols-4 md:px-12">
		<div class="col-span-1 md:col-span-2">
			<div class="mb-6 flex items-center gap-2 text-2xl font-bold tracking-tighter">
				<img
					src="/favicon.svg"
					alt="Logo"
					class="h-8 w-8 rounded-lg bg-white object-contain p-0.5"
				/>
				{siteData.general.name}.
			</div>
			<p class="mb-8 max-w-sm leading-relaxed text-slate-400">
				{siteData.general.tagline}
			</p>
			<div class="flex gap-4">
				<a
					href={siteData.general.socials.instagram}
					class="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-all hover:bg-[#4ADE80] hover:text-slate-900"
				>
					<Instagram size={20} />
				</a>
				<a
					href={siteData.general.socials.linkedin}
					class="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-all hover:bg-[#4ADE80] hover:text-slate-900"
				>
					<Linkedin size={20} />
				</a>
			</div>
		</div>

		<div>
			<h4 class="mb-6 text-lg font-bold text-white">Explore</h4>
			<ul class="space-y-4 text-slate-400">
				<li><a href="/about" class="transition-colors hover:text-[#4ADE80]">About Us</a></li>
				<li><a href="/programs" class="transition-colors hover:text-[#4ADE80]">Our Programs</a></li>
				<li>
					<a href="/opportunities" class="transition-colors hover:text-[#4ADE80]"
						>Opportunities Hub</a
					>
				</li>
				<li><a href="/contact" class="transition-colors hover:text-[#4ADE80]">Contact</a></li>
			</ul>
		</div>

		<div>
			<h4 class="mb-2 text-lg font-bold text-white">Newsletter</h4>
			<p class="mb-6 text-sm text-slate-400">Sign in to newsletter and never miss update.</p>

			<form class="relative w-full">
				<input
					type="email"
					placeholder="name@email.com"
					class="h-12 w-full rounded-full border border-white/10 bg-white/5 pr-14 pl-5 text-sm text-white transition-colors placeholder:text-slate-500 focus:border-[#4ADE80] focus:outline-none"
				/>
				<button
					type="submit"
					class="absolute top-1 right-1 bottom-1 flex h-10 w-10 items-center justify-center rounded-full bg-[#4ADE80] text-slate-900 transition-transform hover:scale-105"
				>
					<ArrowRight size={18} />
				</button>
			</form>
		</div>
	</div>

	<div
		class="pointer-events-none absolute bottom-0 left-0 z-0 flex w-full justify-center overflow-hidden leading-none opacity-[0.03] select-none"
	>
		<h1 class="text-[14vw] font-black tracking-tighter whitespace-nowrap text-white">
			G TECH SKILLSHUB
		</h1>
	</div>

	<div class="relative z-20 border-t border-white/5 bg-slate-900/50 backdrop-blur-sm">
		<div
			class="mx-auto flex max-w-7xl flex-col items-center justify-between px-6 py-8 text-center text-sm text-slate-500 md:flex-row md:px-12 md:text-left"
		>
			<p>&copy; {new Date().getFullYear()} {siteData.general.name}. All rights reserved.</p>
			<div class="mt-4 flex gap-6 md:mt-0">
				<a href="/privacy" class="transition-colors hover:text-white">Privacy</a>
				<a href="/terms" class="transition-colors hover:text-white">Terms</a>
			</div>
		</div>
	</div>
</footer>
