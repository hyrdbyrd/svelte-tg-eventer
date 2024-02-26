<script lang="ts">
    import { page } from '$app/stores';

    import Input from '@/shared/components/Input.svelte';
	import Button from '@/shared/components/Button.svelte';
	import Section from "@/shared/components/Section.svelte";
    import Textarea from '@/shared/components/Textarea.svelte';

    import { Footer } from '@/features/footer';
    import { users, updateUserFx } from '@/features/user';

    let user = $users.find(user => String(user.meta.id) === $page.url.searchParams.get('userId'));

    let userName = user?.meta.userName || '';
    let description = user?.meta.description || '';

    let isLoading = false;

    function handleSave(ev: Event) {
        ev.preventDefault();

        isLoading = true;
        updateUserFx({
            ...user!,
            meta: {
                ...user!.meta,
                userName,
                description,
            }
        })
            .then(() => history.back())
            .finally(() => isLoading = false);
    }
</script>

<!-- TODO: i18n -->
<Section type="main">
    <form on:submit={handleSave}>
        <Section>
            <Input bind:value={userName} name="Имя" placeholder="Введите имя" />
        </Section>
        <Section>
            <Textarea bind:value={description} name="Описание" placeholder="Расскажите о себе: ваша профессиональная деятельность, интересы, увлечения..." />
        </Section>
    </form>
</Section>

{#if userName}
    <Footer>
        <Button disabled={isLoading} wide on:click={handleSave}>
            Сохранить
        </Button>
    </Footer>
{/if}
