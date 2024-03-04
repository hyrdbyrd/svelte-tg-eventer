<script lang="ts">
	import cn from 'classnames';

	import type { RoleType } from './types';

	export let bold: boolean = false;
	export let role: RoleType = 'main';

	export let truncate: boolean = false;
	export let align: string | undefined = undefined;

	export let as: 'p' | 'span' = truncate ? 'p' : 'span';
</script>

<svelte:element this={as} class={cn(role, $$restProps.class)} class:truncate style:text-align={align} class:bold>
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
</style>
