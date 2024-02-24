<script lang="ts">
	import cn from 'classnames';

	import type { RoleType } from './types';

	export let bold: boolean = false;
	export let role: RoleType = 'main';
</script>

<span class={cn(role, $$restProps.class)} class:bold>
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

	.accent {
		color: var(--text-accent-color);
	}

	.subtitle {
		color: var(--subtitle-color);
	}
</style>
