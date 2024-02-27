<script lang="ts">
    import { page } from '$app/stores';

    import Text from '@/shared/components/Text.svelte';
    import Field from '@/shared/components/Field.svelte';
    import Section from '@/shared/components/Section.svelte';

    import { Footer } from '@/features/footer';

    import { users, UserAvatarsList } from '@/features/user';

    let userId = $page.url.searchParams.get('userId');
    let userForId = $page.url.searchParams.get('userForId');

    $: currentUser = $users.find(user => String(user.meta.id) === userId)!;
    $: hereUser = $users.find(user => String(user.meta.id) === userForId)!;
</script>

<!-- TODO: i18n -->

{#if hereUser}
    <UserAvatarsList users={[hereUser]} />

    <Section type="inner">
        <Field>
            <Text slot="name" role="main">{hereUser.meta.userName}</Text>
            <Text slot="content" role="secondary">Имя</Text>
        </Field>
    </Section>
    {#if hereUser.meta.description}
        <Section type="inner">
            <Field>
                <Text slot="name" role="main">{hereUser.meta.description}</Text>
                <Text slot="content" role="secondary">Описание</Text>
            </Field>
        </Section>
    {/if}
{/if}
