<script lang="ts">
	import { slide } from 'svelte/transition';
	import { Plus, Minus } from 'lucide-svelte';

	export let question = '';
	let isOpen = false;
</script>

<div class="border-b border-slate-100 last:border-0">
	<button
		class="group flex w-full items-center justify-between py-6 text-left"
		on:click={() => (isOpen = !isOpen)}
	>
		<span class="text-xl font-bold text-slate-900 transition-colors group-hover:text-blue-600">
			{question}
		</span>
		<span
			class="rounded-full bg-slate-50 p-2 text-slate-400 transition-colors group-hover:bg-blue-50 group-hover:text-blue-600"
		>
			{#if isOpen}
				<Minus size={20} />
			{:else}
				<Plus size={20} />
			{/if}
		</span>
	</button>

	{#if isOpen}
		<div transition:slide={{ duration: 300 }} class="pb-6 text-lg leading-relaxed text-slate-600">
			<slot />
		</div>
	{/if}
</div>
