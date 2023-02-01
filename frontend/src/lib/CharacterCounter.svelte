<script lang="ts">
	export let maxLength: number;
	export let content: string;

	$: length = content.length;
</script>

<div class="flex-auto text-secondary">
	{length} / {maxLength} characters.
</div>
