<script lang="ts">
	import dayjs from 'dayjs';
	import relativeTime from 'dayjs/plugin/relativeTime';

	dayjs.extend(relativeTime);

	export let date: Date;
</script>

<div class="text-secondary">
	{dayjs(date).fromNow()}
</div>
