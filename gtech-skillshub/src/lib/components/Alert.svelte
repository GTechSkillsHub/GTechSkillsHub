<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import { CheckCircle2, XCircle, X } from 'lucide-svelte';

	export let type: 'success' | 'error' = 'success';
	export let message = '';
	export let visible = false;
	export let onClose: () => void; // Callback to close it from parent
</script>

{#if visible}
	<div
		transition:fly={{ y: 50, duration: 300 }}
		class="fixed right-6 bottom-6 z-[100] w-full max-w-sm md:w-auto"
	>
		<div
			class={`
      flex items-start gap-3 rounded-xl border p-4 shadow-2xl 
      ${type === 'success' ? 'border-green-100 bg-white' : 'border-red-100 bg-white'}
    `}
		>
			<div class={`mt-0.5 ${type === 'success' ? 'text-[#4ADE80]' : 'text-red-500'}`}>
				{#if type === 'success'}
					<CheckCircle2 size={24} />
				{:else}
					<XCircle size={24} />
				{/if}
			</div>

			<div class="flex-1">
				<h4 class={`text-sm font-bold ${type === 'success' ? 'text-slate-900' : 'text-red-600'}`}>
					{type === 'success' ? 'Success' : 'Error'}
				</h4>
				<p class="mt-1 text-sm leading-relaxed text-slate-600">{message}</p>
			</div>

			<button on:click={onClose} class="text-slate-400 transition-colors hover:text-slate-600">
				<X size={18} />
			</button>
		</div>
	</div>
{/if}
