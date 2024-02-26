<script lang="ts">
	import Stack from './Stack.svelte';
</script>

<Stack class={$$restProps.class} gap="4" wide direction="vertical">
	<slot name="name" />
	<slot name="content" />
</Stack>
