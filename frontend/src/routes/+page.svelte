<script lang="ts">
	import SmallTitle from "../lib/SmallTitle.svelte";
	import CharacterCounter from "../lib/CharacterCounter.svelte";
	import Button from "../lib/Button.svelte";
    import PasteTextarea from "$lib/PasteTextarea.svelte";

	const maxLength: number = 4096;
	let content: string = '';
</script>

<SmallTitle>New paste</SmallTitle>

<form method="POST">
	<PasteTextarea bind:content={content} {maxLength} />

	<div class="flex mt-4 w-full">
		<CharacterCounter {maxLength} bind:content={content} />
		
		<Button
			disabled='{content.length == 0 || content.length > maxLength}'
			isSubmit>
			Submit
		</Button>
	</div>
</form>
