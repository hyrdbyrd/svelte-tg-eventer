<script lang="ts">
	import { page } from '$app/stores';

	import Input from '@/shared/components/Input.svelte';
	import Section from '@/shared/components/Section.svelte';
	import Textarea from '@/shared/components/Textarea.svelte';

	import { Footer } from '@/features/footer';
	import Button from '@/shared/components/Button.svelte';
	import { createCustomMeetingFx } from '@/features/meeting';
	import Tumbler from '@/shared/components/Tumbler.svelte';
	import { goFromMain } from '@/shared/lib/navigate';

	let name = '';
	let capacity = '';
	let description = '';

	let withCount = false;

	let isLoading = false;

	function handleSave(ev: Event) {
		ev.preventDefault();

		isLoading = true;
		createCustomMeetingFx({
			name,
			description,
			status: 'ACCEPTED',
			type: 'CUSTOM_MEETING',
			capacity: withCount ? null : Number(capacity),
			eventId: Number($page.url.searchParams.get('eventId')!),
			organizatorId: Number($page.url.searchParams.get('userId')!),
		})
			.then((data) => goFromMain('/meeting', { meetingId: data.id! }))
			.finally(() => (isLoading = false));
	}
</script>

<!-- TODO: i18n -->
<Section type="main">
	<form on:submit={handleSave}>
		<Section>
			<Input bind:value={name} name="Название встречи" placeholder="Введите название встречи" />
		</Section>
		<Section>
			<Textarea
				name="Описание встречи"
				bind:value={description}
				placeholder="Опишите, что вы хотите обсуждать или делать"
			/>
		</Section>
		<Section>
			<Tumbler
				bind:checked={withCount}
				title="Ограничить количество участников"
				description="Отображать количество в карточке"
			/>
		</Section>
		{#if withCount}
			<Section>
				<Input
					bind:value={capacity}
					placeholder="Введите максимальное число участников"
					type="number"
					min="0"
					max="100"
					name="Количество участников"
				/>
			</Section>
		{/if}
	</form>
</Section>

<Footer>
	<Button disabled={isLoading || !name} wide on:click={handleSave}>Сохранить</Button>
</Footer>
