<script lang="ts">
	import '../routes/layout.css'; // Ensure this matches your CSS file name
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<div class="flex min-h-screen flex-col font-sans selection:bg-blue-200 selection:text-blue-900">
	<Navbar />

	<main class="flex-grow">
		<slot />
	</main>

	<Footer />
</div>
