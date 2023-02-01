<script lang="ts">
	import autosize from 'svelte-autosize';

	export let content: string;
	export let maxLength: number = -1;
	export let readonly: boolean = false;
</script>

<textarea
	use:autosize
	bind:value={content}
	name='content'
	maxlength={maxLength}
	readonly={readonly}
	class="w-full h-96 p-2
		bg-neutral-100
		border-2 border-text rounded-lg
		read-only:border-disabled" />

<style>
	textarea {
		font-family: "Fira Mono";
		resize: none;
	}
</style>
