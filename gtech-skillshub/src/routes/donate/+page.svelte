<script lang="ts">
	import Reveal from '$lib/components/Reveal.svelte';
	import AccordionItem from '$lib/components/AccordionItem.svelte';
	import { siteData } from '$lib/data';
	import { ArrowRight } from 'lucide-svelte';
	import { PUBLIC_WEB3FORMS_ACCESS_KEY } from '$env/static/public';

	const { hero, steps, faq } = siteData.donatePage;

	// Donation form state
	let donorName = '';
	let donorPhone = '';
	let donorEmail = '';
	let amount: number | '' = '';
	let cause = 'General Support';
	let msg = '';
	let isSubmitting = false;

	async function handleDonateSubmit() {
		// Validate required fields
		if (!donorName || !donorEmail || amount === '' || amount === null || amount <= 0) {
			alert('Please fill in all required fields.');
			return;
		}
		isSubmitting = true;

		// Prepare the data for Web3Forms - Donation Pledge Form
		const formData = new FormData();
		formData.append('access_key', PUBLIC_WEB3FORMS_ACCESS_KEY);
		formData.append('subject', `New Donation Pledge: $${amount} - ${cause}`);
		formData.append('donor_name', donorName);
		formData.append('email', donorEmail);
		formData.append('phone', donorPhone || 'Not provided');
		formData.append('amount', `$${amount}`);
		formData.append('cause', cause);
		formData.append('message', msg || 'No additional message');
		formData.append('from_name', 'GTech SkillsHub Donation Form');

		try {
			// Send to Web3Forms API
			const response = await fetch('https://api.web3forms.com/submit', {
				method: 'POST',
				body: formData
			});

			// Check HTTP status before parsing JSON
			if (!response.ok) {
				let errorMessage = `HTTP Error: ${response.status} ${response.statusText}`;
				try {
					const errorText = await response.text();
					if (errorText) {
						try {
							const errorData = JSON.parse(errorText);
							if (errorData.message) {
								errorMessage = errorData.message;
							}
						} catch {
							// Not JSON, use text directly
							errorMessage = errorText;
						}
					}
				} catch {
					// Fall back to HTTP status message
				}
				alert(`Submission failed: ${errorMessage}`);
				return;
			}
			const result = await response.json();

			if (result.success) {
				alert(
					'Thank you for your pledge! We will contact you shortly to arrange the bank transfer or Mobile Money payment.'
				);
				// Reset form
				donorName = '';
				donorPhone = '';
				donorEmail = '';
				msg = '';
				amount = '';
				cause = 'General Support';
			} else {
				alert('Something went wrong. Please try again.');
			}
		} catch (err) {
			if (import.meta.env.DEV) {
				console.error('Donation pledge form error:', err);
			}
			alert('Error connecting to the server. Please try again later.');
		} finally {
			isSubmitting = false;
		}
	}
</script>

<div class="flex min-h-screen flex-col bg-slate-50 font-sans text-slate-900">
	<section
		class="relative flex-shrink-0 overflow-hidden rounded-b-[3rem] bg-[#0F172A] px-6 pt-48 pb-24 text-white md:px-12"
	>
		<div
			class="pointer-events-none absolute top-1/2 left-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-500/20 blur-[120px]"
		></div>

		<div class="relative z-10 mx-auto max-w-7xl text-center">
			<Reveal>
				<span
					class="mb-6 inline-block rounded-full border border-white/20 bg-white/5 px-3 py-1 text-sm font-bold tracking-widest text-[#4ADE80] uppercase"
				>
					{hero.tag}
				</span>
				<h1 class="mb-6 text-4xl leading-tight font-bold md:text-6xl">
					{hero.title}
				</h1>
				<p class="mx-auto max-w-2xl text-xl leading-relaxed text-slate-300">
					{hero.subtitle}
				</p>
			</Reveal>
		</div>
	</section>

	<section class="px-6 py-24 md:px-12">
		<div class="mx-auto grid max-w-7xl items-start gap-16 lg:grid-cols-2">
			<div>
				<Reveal>
					<h2 class="mb-12 text-3xl font-bold text-slate-900">Donate in 4 Easy Steps</h2>

					<div class="relative space-y-10">
						<div
							class="absolute top-4 bottom-4 left-[26px] -z-10 hidden w-0.5 bg-slate-200 md:block"
						></div>

						{#each steps as step}
							<div
								class="flex items-start gap-6 rounded-2xl bg-slate-50 p-4 md:rounded-none md:bg-transparent md:p-0"
							>
								<div
									class="z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#4ADE80] text-slate-900 shadow-lg shadow-green-900/10"
								>
									<svelte:component this={step.icon} size={28} />
								</div>

								<div class="flex-grow pt-2">
									<h3 class="mb-1 text-xl font-bold text-slate-900">{step.title}</h3>
									<p class="text-sm leading-relaxed text-slate-500">{step.desc}</p>
								</div>

								<div class="hidden text-4xl font-black text-slate-200 select-none md:block">
									{step.num}
								</div>
							</div>
						{/each}
					</div>
				</Reveal>
			</div>

			<div>
				<Reveal delay={0.2}>
					<div class="rounded-[2rem] border border-slate-100 bg-white p-8 shadow-2xl md:p-10">
						<h3 class="mb-8 border-b border-slate-100 pb-4 text-xl font-bold text-slate-900">
							Donation Information
						</h3>

						<form class="space-y-6" on:submit|preventDefault={handleDonateSubmit}>
							<div class="grid gap-6 md:grid-cols-2">
								<div class="space-y-2">
									<label for="name" class="ml-1 text-sm font-bold text-slate-700">First Name*</label
									>
									<input
										type="text"
										id="name"
										name="name"
										bind:value={donorName}
										required
										placeholder="Jane"
										class="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 transition-all focus:ring-2 focus:ring-[#4ADE80] focus:outline-none"
									/>
								</div>
								<div class="space-y-2">
									<label for="phone" class="ml-1 text-sm font-bold text-slate-700">Phone</label>
									<input
										type="tel"
										id="phone"
										name="phone"
										bind:value={donorPhone}
										placeholder="+250..."
										class="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 transition-all focus:ring-2 focus:ring-[#4ADE80] focus:outline-none"
									/>
								</div>
							</div>

							<div class="grid gap-6 md:grid-cols-2">
								<div class="space-y-2">
									<label for="email" class="ml-1 text-sm font-bold text-slate-700">Email*</label>
									<input
										type="email"
										id="email"
										name="email"
										bind:value={donorEmail}
										required
										placeholder="you@email.com"
										class="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 transition-all focus:ring-2 focus:ring-[#4ADE80] focus:outline-none"
									/>
								</div>
								<div class="space-y-2">
									<label for="amount" class="ml-1 text-sm font-bold text-slate-700"
										>Donation Amount*</label
									>
									<div class="relative">
										<span class="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">$</span>
										<input
											type="number"
											id="amount"
											name="amount"
											bind:value={amount}
											required
											min="0"
											step="0.01"
											placeholder="0.00"
											class="w-full rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-4 py-3 transition-all focus:ring-2 focus:ring-[#4ADE80] focus:outline-none"										/>
									</div>
								</div>
							</div>

							<div class="space-y-2">
								<label for="cause" class="ml-1 text-sm font-bold text-slate-700"
									>Select a Cause*</label
								>
								<select
									id="cause"
									name="cause"
									bind:value={cause}
									required
									class="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 transition-all focus:ring-2 focus:ring-[#4ADE80] focus:outline-none"
								>
									<option>General Support</option>
									<option>Sponsor a Student</option>
									<option>Digital Infrastructure</option>
									<option>Women Empowerment</option>
								</select>
							</div>

							<div class="space-y-2">
								<label for="msg" class="ml-1 text-sm font-bold text-slate-700">Your Message</label>
								<textarea
									id="msg"
									name="msg"
									bind:value={msg}
									rows="3"
									placeholder="Message..."
									class="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 transition-all focus:ring-2 focus:ring-[#4ADE80] focus:outline-none"
								></textarea>
							</div>

							<button
								type="submit"
								disabled={isSubmitting}
								class="w-full rounded-xl bg-[#4ADE80] py-4 font-bold text-slate-900 shadow-lg shadow-green-900/10 transition-all hover:scale-[1.02] hover:bg-[#22c55e] disabled:opacity-60"
							>
								{isSubmitting ? 'Processing...' : 'Submit Donation'}
							</button>
						</form>
					</div>
				</Reveal>
			</div>
		</div>
	</section>

	<section class="mt-auto rounded-t-[3rem] bg-white px-6 py-24 md:px-12">
		<div class="mx-auto max-w-3xl">
			<Reveal>
				<div class="mb-16">
					<span class="mb-4 block text-sm font-bold tracking-widest text-[#4ADE80] uppercase"
						>FAQ</span
					>
					<h2 class="mb-4 text-4xl font-bold text-slate-900">
						What You're Thinking,<br />We've Answered.
					</h2>
					<p class="text-slate-500">
						Find helpful answers to common questions about donating, volunteering & fundraising.
					</p>
				</div>
			</Reveal>

			<Reveal delay={0.2}>
				<div
					class="rounded-[2rem] border border-slate-100 bg-white p-8 shadow-2xl shadow-slate-200/50 md:p-12"
				>
					{#each faq as item}
						<AccordionItem question={item.question}>
							{item.answer}
						</AccordionItem>
					{/each}
				</div>
			</Reveal>
		</div>
	</section>
</div>
