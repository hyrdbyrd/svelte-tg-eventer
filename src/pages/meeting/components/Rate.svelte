<script lang="ts">
    import Section from '@/shared/components/Section.svelte';
    import Textarea from '@/shared/components/Textarea.svelte';

    import { RateMeeeting } from '@/features/meeting';
	import type { Meeting } from '@/entities/meeting';

    export let meeting: Meeting;

    export let rate: number = meeting.rate || 0;
    export let rateText: string = meeting.meetingNote || '';
</script>

<Section type="main" title="Оценка">
    <Section type="inner">
        <RateMeeeting bind:currentRate={rate} />
    </Section>
    <Section type="inner">
        <Textarea
            bind:value={rateText}
            name="Впечатления от встречи"
            placeholder="Расскажите, как прошла встреча"
        />
    </Section>
</Section>
