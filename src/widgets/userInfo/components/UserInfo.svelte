<script lang="ts">
	import Text from '@/shared/components/Text.svelte';
	import Field from '@/shared/components/Field.svelte';
	import Section from '@/shared/components/Section.svelte';

	import { UserAvatarsList } from '@/features/user';
	import type { User } from '@/entities/user';

	export let user: User;
</script>

<!-- TODO: i18n -->

{#if user}
	<UserAvatarsList users={[user]} />

	<Section type="inner">
		<Field>
			<Text slot="name" role="main" truncate={false}>{user.meta.userName}</Text>
			<Text slot="content" role="secondary">Имя</Text>
		</Field>
	</Section>
	{#if user.meta.description}
		<Section type="inner">
			<Field>
				<Text slot="name" role="main" truncate={false}>{user.meta.description}</Text>
				<Text slot="content" role="secondary">Описание</Text>
			</Field>
		</Section>
	{/if}
{/if}
