<script lang="ts">
	import cn from 'classnames';

	import type { RoleType } from './types';

	export let bold: boolean = false;
	export let role: RoleType = 'main';

	export let truncate: boolean = true;
	export let align: string | undefined = undefined;

	export let as: 'p' | 'span' | 'div' = truncate ? 'p' : 'span';
</script>

<svelte:element
	class={cn(role, $$restProps.class, 'element')}
	this={as}
	class:bold
	class:truncate
	style:text-align={align}
>
	<slot />
</svelte:element>

<!-- TODO: styles (rem/em, sizes, heading) -->

<style>
	.truncate {
		width: 100%;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}

	.bold {
		font-weight: bolder;
	}

	.main {
		color: var(--text-main-color);
	}

	.secondary {
		color: var(--text-secondary-color);
	}

	.destructive {
		color: var(--text-destructive-color);
	}

	.accent {
		color: var(--text-accent-color);
	}

	.subtitle {
		color: var(--subtitle-color);
	}

	.element {
		word-break: break-word;
	}
</style>
