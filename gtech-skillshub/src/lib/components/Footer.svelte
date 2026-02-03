<script lang="ts">
    import { siteData } from '$lib/data';
    import { Instagram, Linkedin, ArrowRight } from 'lucide-svelte';
    import { PUBLIC_WEB3FORMS_ACCESS_KEY } from '$env/static/public';
    import Alert from '$lib/components/Alert.svelte'; // Import Alert

    // Newsletter form state
    let newsletterEmail = '';
    let isSubmitting = false;
    let newsletterForm: HTMLFormElement | null = null;
    let emailInput: HTMLInputElement | null = null;

    // Alert State
    let alertVisible = false;
    let alertType: 'success' | 'error' = 'success';
    let alertMessage = '';

    function triggerAlert(type: 'success' | 'error', msg: string) {
        alertType = type;
        alertMessage = msg;
        alertVisible = true;
        setTimeout(() => alertVisible = false, 5000); // Auto hide after 5s
    }

    async function handleSubscribe() {
        if (!newsletterEmail) return;

        isSubmitting = true;

        const formData = new FormData();
        formData.append('access_key', PUBLIC_WEB3FORMS_ACCESS_KEY);
        formData.append('email', newsletterEmail);
        formData.append('subject', 'New Newsletter Subscriber - GTech SkillsHub');
        formData.append('from_name', 'GTech Website Footer');
        formData.append('message', `New newsletter subscription from: ${newsletterEmail}`);

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData
            });

            const result = await response.json();

            if (result.success) {
                triggerAlert('success', 'Thanks for subscribing! You are on the list.'); // Use Alert
                newsletterEmail = ''; 
            } else {
                triggerAlert('error', 'Something went wrong. Please try again.'); // Use Alert
            }
        } catch (err) {
            if (import.meta.env.DEV) {
                console.error('Newsletter subscribe error:', err);
            }
            triggerAlert('error', 'Error connecting to the server.'); // Use Alert
        } finally {
            isSubmitting = false;
        }
    }
</script>

<Alert 
    visible={alertVisible} 
    type={alertType} 
    message={alertMessage} 
    onClose={() => alertVisible = false} 
/>

<footer class="relative overflow-hidden bg-slate-900 pt-20 pb-0 text-white">
    <div class="relative z-20 mx-auto mb-20 grid max-w-7xl gap-12 px-6 md:grid-cols-4 md:px-12">
        <div class="col-span-1 md:col-span-2">
            <div class="mb-6 flex items-center gap-2 text-2xl font-bold tracking-tighter">
                <img src="/favicon.svg" alt="Logo" class="h-8 w-8 rounded-lg bg-white object-contain p-0.5" />
                {siteData.general.name}.
            </div>
            <p class="mb-8 max-w-sm leading-relaxed text-slate-400">
                {siteData.general.tagline}
            </p>
            <div class="flex gap-4">
                <a href={siteData.general.socials.instagram} aria-label="Instagram" target="_blank" rel="noopener noreferrer" class="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-all hover:bg-[#4ADE80] hover:text-slate-900">
                    <Instagram size={20} />
                </a>
                <a href={siteData.general.socials.linkedin} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" class="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-all hover:bg-[#4ADE80] hover:text-slate-900">
                    <Linkedin size={20} />
                </a>
            </div>
        </div>

        <div>
            <h4 class="mb-6 text-lg font-bold text-white">Explore</h4>
            <ul class="space-y-4 text-slate-400">
                <li><a href="/about" class="transition-colors hover:text-[#4ADE80]">About Us</a></li>
                <li><a href="/programs" class="transition-colors hover:text-[#4ADE80]">Our Programs</a></li>
                <li><a href="/opportunities" class="transition-colors hover:text-[#4ADE80]">Opportunities Hub</a></li>
                <li><a href="/contact" class="transition-colors hover:text-[#4ADE80]">Contact</a></li>
            </ul>
        </div>

        <div>
            <h4 class="mb-2 text-lg font-bold text-white">Newsletter</h4>
            <p class="mb-6 text-sm text-slate-400">Sign up for our newsletter and never miss an update.</p>

            <form class="relative w-full" on:submit|preventDefault={handleSubscribe} bind:this={newsletterForm}>
                <input type="email" name="email" bind:this={emailInput} bind:value={newsletterEmail} required placeholder="name@email.com" class="h-12 w-full rounded-full border border-white/10 bg-white/5 pr-14 pl-5 text-sm text-white transition-colors placeholder:text-slate-500 focus:border-[#4ADE80] focus:outline-none" />
                <button type="submit" disabled={isSubmitting} class="absolute top-1 right-1 bottom-1 flex h-10 w-10 items-center justify-center rounded-full bg-[#4ADE80] text-slate-900 transition-transform hover:scale-105 disabled:opacity-60">
                    <ArrowRight size={18} />
                </button>
            </form>
        </div>
    </div>

    <div class="pointer-events-none absolute bottom-0 left-0 z-0 flex w-full justify-center overflow-hidden leading-none opacity-[0.03] select-none">
        <h1 class="text-[14vw] font-black tracking-tighter whitespace-nowrap text-white">GTECHSKILLSHUB</h1>
    </div>

    <div class="relative z-20 border-t border-white/5 bg-slate-900/50 backdrop-blur-sm">
        <div class="mx-auto flex max-w-7xl flex-col items-center justify-between px-6 py-8 text-center text-sm text-slate-500 md:flex-row md:px-12 md:text-left">
            <p>© {new Date().getFullYear()} {siteData.general.name}. All rights reserved.</p>
            <div class="mt-4 flex gap-6 md:mt-0">
                <a href="/privacy" class="transition-colors hover:text-white">Privacy</a>
                <a href="/terms" class="transition-colors hover:text-white">Terms</a>
            </div>
        </div>
    </div>
</footer>