<script lang="ts">
	// Optional: Pass a link if the whole card should be clickable
	export let href = '';

	// Optional: Add custom classes if needed (like "bg-slate-900" for dark cards)
	export let classStr = '';
</script>

{#if href}
	<a {href} class="group block h-full">
		<div
			class="
        h-full w-full
        rounded-[2rem]
        border
        border-slate-100 bg-white
        p-8 transition-all
        duration-500 ease-out hover:-translate-y-2
        hover:border-blue-100
        hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)]
        md:p-10
        {classStr}
    "
		>
			<slot />
		</div>
	</a>
{:else}
	<div
		class="
    h-full w-full
    rounded-[2rem]
    border
    border-slate-100 bg-white
    p-8 transition-all
    duration-500 ease-out hover:-translate-y-2
    hover:border-blue-100
    hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)]
    md:p-10
    {classStr}
  "
	>
		<slot />
	</div>
{/if}
