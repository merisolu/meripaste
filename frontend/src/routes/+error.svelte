<script>
	import { page } from '$app/stores';
</script>

<div>
	<div class="mt-4 text-3xl">
		{$page.status}
	</div>
	<div>
		{$page.error?.message}
	</div>
</div>
