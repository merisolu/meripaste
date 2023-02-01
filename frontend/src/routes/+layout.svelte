<script lang="ts">
	import "../app.css";
	import "@fontsource/nunito-sans/400.css";
	import "@fontsource/nunito-sans/700.css";
	import "@fontsource/nunito-sans/900.css";
	import "@fontsource/fira-mono/400.css";

	import SmallTitle from "$lib/SmallTitle.svelte";
	import PastePreview from "$lib/PastePreview.svelte";
    import Header from "$lib/Header.svelte";
    import Footer from "$lib/Footer.svelte";

	/** @type {import('./$types').LayoutServerData} */
	export let data: any;
</script>

<div class="w-full px-5 sm:px-20">
	<Header />

	<div class="m-auto mb-8 w-full">
		<slot />
	</div>

	<SmallTitle>Recent pastes</SmallTitle>
	
	{#if !data.error && data.pastes.length > 0}
		<div>
			{#each data.pastes as { id, createdAt, synopsis }, i}
				<PastePreview {id} {createdAt} {synopsis} />
			{/each}
		</div>
	{:else if data.error}
		<div>
			{data.error.message}
		</div>
	{:else}
		<div class="text-secondary">
			No recent pastes.
		</div>
	{/if}

	<Footer />
</div>
