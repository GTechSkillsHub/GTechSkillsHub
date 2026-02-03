<script lang="ts">
	import Reveal from '$lib/components/Reveal.svelte';
	import { siteData } from '$lib/data';
	import { CheckCircle2, ArrowRight } from 'lucide-svelte';
	import { PUBLIC_WEB3FORMS_ACCESS_KEY } from '$env/static/public';
	import Alert from '$lib/components/Alert.svelte';

	const { hero, requirements, steps } = siteData.applyPage;
	let selectedProgram = '';

	// form state
	let name = '';
	let age: number | '' = '';
	let phone = '';
	let location = '';
	let motivation = '';
	let isSubmitting = false;
	// Alert State
	let alertVisible = false;
	let alertType: 'success' | 'error' = 'success';
	let alertMessage = '';

	function triggerAlert(type: 'success' | 'error', msg: string) {
		alertType = type;
		alertMessage = msg;
		alertVisible = true;
		setTimeout(() => (alertVisible = false), 5000);
	}

	async function handleSubmit() {
		// Validate required fields
		if (!name || !age || !phone || !location || !selectedProgram || !motivation) {
			triggerAlert('error', 'Please complete all required fields.');
			return;
		}

		isSubmitting = true;

		// Prepare the data for Web3Forms
		const formData = new FormData();
		formData.append('access_key', PUBLIC_WEB3FORMS_ACCESS_KEY);
		formData.append('name', name);
		formData.append('age', age.toString());
		formData.append('phone', phone);
		formData.append('location', location);
		formData.append('program', selectedProgram);
		formData.append('message', motivation);
		formData.append('subject', 'New Program Application from GTech SkillsHub Website');

		try {
			// Send to Web3Forms API
			const response = await fetch('https://api.web3forms.com/submit', {
				method: 'POST',
				body: formData
			});

			// Check HTTP status before parsing JSON
			if (!response.ok) {
				throw new Error(`HTTP Error: ${response.status} ${response.statusText}`);
			}

			const result = await response.json();

			if (result.success) {
				triggerAlert(
					'success',
					'Application submitted successfully! We will review your application and contact you soon.'
				);
				// Reset form
				name = '';
				age = '';
				phone = '';
				location = '';
				selectedProgram = '';
				motivation = '';
			} else {
				triggerAlert('error', 'Something went wrong. Please try again.');
			}
		} catch (err) {
			if (import.meta.env.DEV) {
				console.error('Application form error:', err);
			}
			triggerAlert('error', 'Submission failed. Please try again later.');
		} finally {
			isSubmitting = false;
		}
	}
</script>

<Alert
	visible={alertVisible}
	type={alertType}
	message={alertMessage}
	onClose={() => (alertVisible = false)}
/>



<div class="flex min-h-screen flex-col bg-slate-50 font-sans text-slate-900">
	<section
		class="relative flex-shrink-0 overflow-hidden rounded-b-[3rem] bg-[#0F172A] px-6 pt-48 pb-24 text-white md:px-12"
	>
		<div
			class="pointer-events-none absolute top-0 right-0 h-full w-2/3 bg-gradient-to-l from-blue-900/20 to-transparent"
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

	<section class="flex-grow px-6 py-12 md:px-12">
		<div class="mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-5">
			<div class="flex flex-col gap-8 lg:col-span-2">
				<Reveal>
					<div class="rounded-[2rem] border border-slate-100 bg-white p-8 shadow-sm">
						<h3 class="mb-6 text-xl font-bold text-slate-900">Who can apply?</h3>
						<ul class="space-y-4">
							{#each requirements as req}
								<li class="flex items-start gap-3">
									<CheckCircle2 class="mt-1 shrink-0 text-[#4ADE80]" size={20} />
									<span class="font-medium text-slate-600">{req}</span>
								</li>
							{/each}
						</ul>
					</div>
				</Reveal>

				<Reveal delay={0.1}>
					<div class="relative overflow-hidden rounded-[2rem] bg-[#0F172A] p-8 text-white">
						<h3 class="relative z-10 mb-6 text-xl font-bold">Application Process</h3>
						<div class="relative z-10 space-y-6">
							{#each steps as step}
								<div class="flex items-center gap-4">
									<div
										class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 font-bold text-[#4ADE80]"
									>
										{step.num}
									</div>
									<p class="font-medium text-slate-300">{step.text}</p>
								</div>
							{/each}
						</div>
					</div>
				</Reveal>
			</div>

			<div class="lg:col-span-3">
				<Reveal delay={0.2}>
					<div class="rounded-[2rem] border border-slate-100 bg-white p-8 shadow-2xl md:p-12">
						<div class="mb-8">
							<h2 class="mb-2 text-3xl font-bold text-slate-900">Student Registration</h2>
							<p class="text-slate-500">Fill in your details correctly. All fields are required.</p>
						</div>

						<form class="space-y-6" on:submit|preventDefault={handleSubmit}>
							<div class="grid gap-6 md:grid-cols-2">
								<div class="space-y-2">
									<label for="name" class="ml-1 text-sm font-bold text-slate-700">Full Name</label>
									<input
										type="text"
										id="name"
										bind:value={name}
										name="name"
										required
										placeholder="Enter your full name"
										class="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 transition-all focus:border-transparent focus:ring-2 focus:ring-[#4ADE80] focus:outline-none"
									/>
								</div>
								<div class="space-y-2">
									<label for="age" class="ml-1 text-sm font-bold text-slate-700">Age</label>
									<input
										type="number"
										id="age"
										bind:value={age}
										name="age"
										required
										min="16"
										max="100"
										placeholder="e.g. 21"
										class="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 transition-all focus:border-transparent focus:ring-2 focus:ring-[#4ADE80] focus:outline-none"
									/>
								</div>
							</div>

							<div class="grid gap-6 md:grid-cols-2">
								<div class="space-y-2">
									<label for="phone" class="ml-1 text-sm font-bold text-slate-700"
										>Phone / WhatsApp</label
									>
									<input
										type="tel"
										id="phone"
										bind:value={phone}
										name="phone"
										required
										placeholder="+250..."
										class="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 transition-all focus:border-transparent focus:ring-2 focus:ring-[#4ADE80] focus:outline-none"
									/>
								</div>
								<div class="space-y-2">
									<label for="location" class="ml-1 text-sm font-bold text-slate-700"
										>Location</label
									>
									<select
										id="location"
										bind:value={location}
										name="location"
										required
										class="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 transition-all focus:border-transparent focus:ring-2 focus:ring-[#4ADE80] focus:outline-none"
									>
										<option value="" disabled>Select location</option>
										<option>Mahama Refugee Camp</option>
										<option>Kirehe District (Host Community)</option>
										<option>Other</option>
									</select>
								</div>
							</div>

							<div class="space-y-2">
								<label for="program" class="ml-1 text-sm font-bold text-slate-700"
									>Which Program?</label
								>
								<select
									id="program"
									bind:value={selectedProgram}
									name="program"
									required
									class="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 transition-all focus:border-transparent focus:ring-2 focus:ring-[#4ADE80] focus:outline-none"
								>
									<option value="" disabled selected>Select a program</option>
									{#each siteData.programs as prog}
										<option value={prog.title}>{prog.title} ({prog.duration})</option>
									{/each}
								</select>
							</div>

							<div class="space-y-2">
								<label for="motivation" class="ml-1 text-sm font-bold text-slate-700"
									>Why do you want to join?</label
								>
								<textarea
									id="motivation"
									bind:value={motivation}
									name="motivation"
									required
									rows="4"
									placeholder="Tell us about your goals..."
									class="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 transition-all focus:border-transparent focus:ring-2 focus:ring-[#4ADE80] focus:outline-none"
								></textarea>
							</div>

							<button
								type="submit"
								disabled={isSubmitting}
								class="flex w-full items-center justify-center gap-2 rounded-xl bg-[#4ADE80] py-4 font-bold text-slate-900 shadow-lg shadow-green-900/10 transition-all hover:scale-[1.02] hover:bg-[#22c55e] disabled:opacity-60"
							>
								{isSubmitting ? 'Submitting...' : 'Submit Application'}
								<ArrowRight size={20} />
							</button>
						</form>
					</div>
				</Reveal>
			</div>
		</div>
	</section>
</div>
