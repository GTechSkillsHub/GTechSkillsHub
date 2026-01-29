<script lang="ts">
	export let href = '';
	export let variant: 'primary' | 'secondary' | 'outline' = 'primary';

	const baseStyles =
		'inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]';

	const variants = {
		primary: 'bg-blue-600 text-white hover:bg-blue-700 shadow-xl shadow-blue-200/50',
		secondary: 'bg-slate-900 text-white hover:bg-slate-800',
		outline: 'bg-white border border-slate-200 text-slate-900 hover:bg-slate-50'
	};
</script>

<a {href} class="{baseStyles} {variants[variant]}">
	<slot />
</a>
