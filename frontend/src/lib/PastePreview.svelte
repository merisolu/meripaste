<script lang="ts">
    import CreationDate from "./CreationDate.svelte";

	export let id: string;
	export let createdAt: Date;
	export let synopsis: string;
</script>

<div class="mb-4 pl-2 border-l-2 border-text">
	<a href="/{id}">
		<span>
			{synopsis}{#if synopsis.length >= 50}...{/if}
		</span>
		<CreationDate date={createdAt} />
	</a>
</div>
