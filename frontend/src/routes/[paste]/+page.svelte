<script lang="ts">
	import CreationDate from "$lib/CreationDate.svelte";
    import ExpirationDate from "$lib/ExpirationDate.svelte";
    import PasteTextarea from "$lib/PasteTextarea.svelte";
    import SmallTitle from "$lib/SmallTitle.svelte";

	import type { PageData } from "./$types";

	export let data: PageData;
</script>

<SmallTitle>Paste</SmallTitle>

<div class="flex w-full">
	<span class="mr-auto self-start">
		Created <CreationDate date={data.paste.createdAt} />
	</span>

	<span class="ml-auto self-end text-right">
		Expires <ExpirationDate date={data.paste.expiresAt} />
	</span>
</div>

<div class="my-2">
	<PasteTextarea content={data.paste.content} readonly />
</div>

