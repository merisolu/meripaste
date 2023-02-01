<script lang="ts">
	export let isSubmit: boolean = false;
	export let disabled: boolean = false;
</script>

<button
	disabled={disabled}
	type={isSubmit ? 'submit' : 'button'}
	class="p-2 px-4
	rounded-lg border-2 border-text
	enabled:hover:bg-text enabled:hover:text-background
	disabled:text-disabled disabled:border-disabled
	font-semibold">
	<slot />
</button>
