<script lang="ts">
	import cn from 'classnames';

	import type { RoleType } from './types';

	export let bold: boolean = false;
	export let role: RoleType = 'main';

	export let align: string | undefined = undefined;
</script>

<span class={cn(role, $$restProps.class)} style:text-align={align} class:bold>
	<slot />
</span>

<!-- TODO: styles (rem/em, sizes, heading) -->

<style>
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
