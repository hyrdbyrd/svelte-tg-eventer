<script lang="ts">
	import cn from 'classnames';

	import type { Align } from './types';
	import { ALIGNING } from './constants';

	export let wide: boolean = false;
	export let align: Align = 'start';
	export let justify: Align = 'start';
	export let direction: 'vertical' | 'horizontal' = 'horizontal';
	export let gap: '0' | '2' | '4' | '6' | '8' | '10' | '20' = '0';
</script>

<div
	style:gap={`${gap}px`}
	style:width={wide ? '100%' : ''}
	style:align-items={ALIGNING[align]}
	style:justify-content={ALIGNING[justify]}
	class={cn(direction, $$restProps.class)}
>
	<slot />
</div>

<style>
	div {
		display: flex;
	}

	.vertical {
		flex-direction: column;
	}

	.horizontal {
		flex-direction: row;
	}
</style>
