<script lang="ts">
	import '../routes/layout.css';
	import { siteData } from '$lib/data';
	import { Instagram, Linkedin, MessageCircle, ArrowRight } from 'lucide-svelte';
</script>

<div
	class="flex min-h-screen flex-col bg-white font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900"
>
	<nav
		class="mx-auto flex w-full max-w-7xl items-center justify-between border-b border-slate-100/50 px-6 py-6"
	>
		<a
			href="/"
			class="flex items-center gap-2 text-xl font-bold tracking-tighter transition-opacity hover:opacity-80"
		>
			<div class="h-8 w-8 rounded-lg bg-blue-600"></div>
			{siteData.general.name}.
		</a>

		<div class="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
			<a href="/programs" class="transition-colors hover:text-blue-600">Programs</a>
			<a href="/impact" class="transition-colors hover:text-blue-600">Impact</a>
			<a href="/team" class="transition-colors hover:text-blue-600">Team</a>
		</div>

		<a
			href={siteData.general.whatsapp}
			target="_blank"
			class="hidden rounded-full bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition-all hover:scale-[1.02] hover:bg-slate-800 active:scale-[0.98] md:block"
		>
			Join Community
		</a>
	</nav>

	<main class="flex-grow">
		<slot />
	</main>

	<footer class="relative mt-auto overflow-hidden border-t border-slate-100 bg-white pt-20 pb-0">
		<div class="relative z-10 mx-auto mb-32 grid max-w-7xl gap-12 px-6 md:grid-cols-4">
			<div class="col-span-1 md:col-span-2">
				<div class="mb-6 flex items-center gap-2 text-2xl font-bold tracking-tighter">
					<div class="h-8 w-8 rounded-lg bg-blue-600"></div>
					{siteData.general.name}.
				</div>
				<p class="mb-8 max-w-sm leading-relaxed text-slate-500">
					{siteData.general.tagline}
				</p>

				<div class="flex flex-col gap-4">
					<a
						href={siteData.general.socials.instagram}
						target="_blank"
						class="group flex items-center gap-3 text-slate-600 transition-colors hover:text-blue-600"
					>
						<div
							class="flex h-10 w-10 items-center justify-center rounded-full bg-slate-50 transition-all group-hover:bg-blue-600 group-hover:text-white"
						>
							<Instagram size={20} />
						</div>
						<span class="font-medium">Instagram</span>
					</a>
					<a
						href={siteData.general.socials.linkedin}
						target="_blank"
						class="group flex items-center gap-3 text-slate-600 transition-colors hover:text-blue-600"
					>
						<div
							class="flex h-10 w-10 items-center justify-center rounded-full bg-slate-50 transition-all group-hover:bg-blue-600 group-hover:text-white"
						>
							<Linkedin size={20} />
						</div>
						<span class="font-medium">LinkedIn</span>
					</a>
					<a
						href={siteData.general.whatsapp}
						target="_blank"
						class="group flex items-center gap-3 text-slate-600 transition-colors hover:text-green-600"
					>
						<div
							class="flex h-10 w-10 items-center justify-center rounded-full bg-slate-50 transition-all group-hover:bg-green-600 group-hover:text-white"
						>
							<MessageCircle size={20} />
						</div>
						<span class="font-medium">WhatsApp Community</span>
					</a>
				</div>
			</div>

			<div>
				<h4 class="mb-6 font-bold text-slate-900">Programs</h4>
				<ul class="space-y-4 text-sm text-slate-600">
					{#each siteData.programs as program}
						<li>
							<a href="/programs" class="block py-1 transition-colors hover:text-blue-600"
								>{program.title}</a
							>
						</li>
					{/each}
				</ul>
			</div>

			<div>
				<h4 class="mb-6 font-bold text-slate-900">Contact</h4>
				<ul class="space-y-4 text-sm text-slate-600">
					<li>{siteData.general.location}</li>
					<li>
						<a href="mailto:{siteData.general.email}" class="hover:text-blue-600"
							>{siteData.general.email}</a
						>
					</li>
					<li>
						<a
							href="/contact"
							class="mt-2 inline-flex items-center gap-2 font-bold text-blue-600 transition-all hover:gap-3"
						>
							Get in Touch <ArrowRight size={16} />
						</a>
					</li>
				</ul>
			</div>
		</div>

		<div class="pointer-events-none w-full overflow-hidden leading-none opacity-[0.03] select-none">
			<h1
				class="translate-y-[20%] text-center text-[12vw] font-black tracking-tighter whitespace-nowrap text-slate-900"
			>
				GTECH SKILLSHUB
			</h1>
		</div>

		

		<div class="relative z-10 border-t border-slate-100 bg-white">
			<div
				class="mx-auto flex max-w-7xl flex-col items-center justify-between px-6 py-6 text-sm text-slate-400 md:flex-row"
			>
				<p>&copy; {new Date().getFullYear()} {siteData.general.name}. All rights reserved.</p>
				<div class="mt-4 flex gap-6 md:mt-0">
					<a href="/privacy" class="transition-colors hover:text-slate-600">Privacy Policy</a>
					<a href="/terms" class="transition-colors hover:text-slate-600">Terms of Service</a>
				</div>
			</div>
		</div>
	</footer>
</div>
