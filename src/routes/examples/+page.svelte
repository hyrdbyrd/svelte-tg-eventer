<script>
	import User from '@/components/User.svelte';
	import Card from '@/components/Card.svelte';
	import Stack from '@/components/Stack.svelte';
	import Button from '@/components/Button.svelte';
	import Rating from '@/components/Rating.svelte';
	import Input from '@/components/Input.svelte';
	import Info from '@/components/Info.svelte';
	import Text from '@/components/Text.svelte';
	import Textarea from '@/components/Textarea.svelte';

	let count = 0;
</script>

<svelte:head>
	<title>Root</title>
	<meta name="description" content="Root" />
</svelte:head>

<Stack direction="vertical" align="center" justify="center" gap="20">
	<Stack gap="4" direction="vertical">
		{#each Array.from({ length: 6 }).map((_, i) => i) as rate}
			<Rating {rate} />
		{/each}
	</Stack>
	<hr />
	<User name="Ilya" state="active" src="invalid" />
	<hr />
	<User name="Ilya" state="inactive" src="invalid" />
	<hr />
	<Stack gap="6" align="center">
		<Button on:click={() => (count += 1)}>Button</Button>
		<Text bold role="main">Clicked {count}</Text>
	</Stack>
	<hr />
	<Card rate={3} title="Card title" time="Card time" />
	<hr />
	<Card
		usersIds={['1', '2', '3', '4', '5']}
		comment="Card comment"
		title="Card title"
		time="Card time"
	/>
	<hr />
	<Card usersIds={['1', '2', '3', '4']} title="Card title" time="Card time" />
	<hr />
	<Input name="Input name" placeholder="Input placeholder" />
	<hr />
	<Info name="Info name" value="Info value" />
	<hr />
	<Textarea name="Textarea name" placeholder="Textarea placeholder" />
</Stack>

<style>
	hr {
		width: 100%;
	}
</style>
