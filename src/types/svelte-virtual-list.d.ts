import type { SvelteComponent } from 'svelte';

/**
 * Стили для библиотеки @sveltejs/svelte-virtual-list не описаны, поэтому нужно их описать
 * https://github.com/sveltejs/svelte-virtual-list
 */

declare module '@sveltejs/svelte-virtual-list' {
	export default class VirtualList<T> extends SvelteComponent<
		{
            /** Список элементов виртуального списка */
			items: T[];
            /**
             * Высота всего виртуального списка
             * @default '100%'
             */
			height?: string;
            /** Высота каждого элемента виртуального списка */
			itemHeight: number;
		},
		any,
		{ item: T }
	> {}
}
