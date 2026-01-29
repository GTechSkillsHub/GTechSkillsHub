<script lang="ts">
	import { siteData } from '$lib/data';
	import { Instagram, Linkedin, MessageCircle } from 'lucide-svelte';
</script>

<footer class="overflow-hidden bg-slate-900 pt-0 pb-12 text-white">
	<div class="relative mb-20 flex w-full overflow-hidden bg-blue-600 py-4">
		<div class="animate-marquee flex items-center gap-8 whitespace-nowrap">
			{#each Array(10) as _}
				<span class="text-xl font-bold tracking-[0.2em] text-white/90 uppercase md:text-2xl">
					Hope • Unity • Care • Impact • Growth • Trust • Together •
				</span>
			{/each}
		</div>
	</div>

	<div class="mx-auto mb-16 grid max-w-7xl gap-12 px-6 md:grid-cols-4 md:px-12">
		<div class="col-span-1 md:col-span-2">
			<div class="mb-6 flex items-center gap-2 text-2xl font-bold tracking-tighter">
				<div class="h-8 w-8 rounded-lg bg-blue-500"></div>
				{siteData.general.name}.
			</div>
			<p class="mb-8 max-w-sm leading-relaxed text-slate-400">
				{siteData.general.tagline}
			</p>
			<div class="flex gap-4">
				<a
					href={siteData.general.socials.instagram}
					class="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-blue-600"
				>
					<Instagram size={20} />
				</a>
				<a
					href={siteData.general.socials.linkedin}
					class="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-blue-600"
				>
					<Linkedin size={20} />
				</a>
			</div>
		</div>

		<div>
			<h4 class="mb-6 text-lg font-bold">Explore</h4>
			<ul class="space-y-4 text-slate-400">
				<li><a href="/about" class="transition-colors hover:text-white">About Us</a></li>
				<li><a href="/programs" class="transition-colors hover:text-white">Our Programs</a></li>
				<li><a href="/impact" class="transition-colors hover:text-white">Impact Stories</a></li>
				<li><a href="/contact" class="transition-colors hover:text-white">Contact</a></li>
			</ul>
		</div>

		<div>
			<h4 class="mb-6 text-lg font-bold">Get Involved</h4>
			<p class="mb-4 text-sm text-slate-400">Join our community for updates.</p>
			<a
				href={siteData.general.whatsapp}
				target="_blank"
				class="inline-flex items-center gap-2 font-bold text-blue-400 transition-colors hover:text-white"
			>
				<MessageCircle size={18} />
				Join WhatsApp
			</a>
		</div>
	</div>

	<div
		class="mx-auto flex max-w-7xl flex-col items-center justify-between border-t border-white/10 px-6 pt-8 text-center text-sm text-slate-500 md:flex-row md:px-12 md:text-left"
	>
		<p>&copy; {new Date().getFullYear()} {siteData.general.name}. All rights reserved.</p>
		<div class="mt-4 flex gap-6 md:mt-0">
			<a href="/privacy" class="transition-colors hover:text-white">Privacy</a>
			<a href="/terms" class="transition-colors hover:text-white">Terms</a>
		</div>
	</div>
</footer>

<style>
	/* The Rolling Text Animation */
	.animate-marquee {
		animation: scroll 30s linear infinite;
	}
	@keyframes scroll {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(-50%);
		}
	}
</style>
