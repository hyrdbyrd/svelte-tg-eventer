<script lang="ts">
	import { onMount, tick } from 'svelte';

	type ItemType = $$Generic;

	export let items: ItemType[];
	export let itemHeight: number = 0;
	export let height: string = '100%';

	export let end = 0;
	export let start = 0;

	let mounted = false;

	let contents: HTMLElement;
	let rows: HTMLCollectionOf<HTMLElement>;

	let viewportHeight = 0;
	let viewport: HTMLElement;

	let heightMap: number[] = [];

	let top = 0;
	let bottom = 0;

	let averageHeight: number;

	$: visible = items.slice(start, end).map((data, i) => ({ index: i + start, data }));

	$: if (mounted) refresh(items, viewportHeight, itemHeight);

	async function refresh(items: ItemType[], viewportHeight: number, itemHeight: number) {
		const { scrollTop } = viewport;

		await tick();

		let contentHeight = top - scrollTop;
		let i = start;

		while (contentHeight < viewportHeight && i < items.length) {
			let row = rows[i - start];

			if (!row) {
				end = i + 1;
				await tick();
				row = rows[i - start];
			}

			const rowHeight = (heightMap[i] = itemHeight || row.offsetHeight);
			contentHeight += rowHeight;
			i += 1;
		}

		end = i;

		const remaining = items.length - end;
		averageHeight = (top + contentHeight) / end;

		bottom = remaining * averageHeight;
		heightMap.length = items.length;
	}

	async function handleScroll() {
		const { scrollTop } = viewport;

		const oldStart = start;

		for (let v = 0; v < rows.length; v += 1) {
			heightMap[start + v] = itemHeight || rows[v].offsetHeight;
		}

		let i = 0;
		let y = 0;

		while (i < items.length) {
			const rowHeight = heightMap[i] || averageHeight;
			if (y + rowHeight > scrollTop) {
				start = i;
				top = y;

				break;
			}

			y += rowHeight;
			i += 1;
		}

		while (i < items.length) {
			y += heightMap[i] || averageHeight;
			i += 1;

			if (y > scrollTop + viewportHeight) break;
		}

		end = i;

		const remaining = items.length - end;
		averageHeight = y / end;

		while (i < items.length) heightMap[i++] = averageHeight;
		bottom = remaining * averageHeight;

		if (start < oldStart) {
			await tick();

			let actualHeight = 0;
			let expectedHeight = 0;

			for (let i = start; i < oldStart; i += 1) {
				if (rows[i - start]) {
					expectedHeight += heightMap[i];
					actualHeight += itemHeight || rows[i - start].offsetHeight;
				}
			}

			const d = actualHeight - expectedHeight;
			viewport.scrollTo(0, scrollTop + d);
		}
	}

	onMount(() => {
		rows = contents.getElementsByTagName('vl-row') as HTMLCollectionOf<HTMLElement>;
		mounted = true;
	});
</script>

<vl-viewport
	style:height
	bind:this={viewport}
	on:scroll={handleScroll}
	bind:offsetHeight={viewportHeight}
>
	<vl-contents bind:this={contents} style:padding-top="{top}px" style:padding-bottom="{bottom}px">
		{#each visible as row (row.index)}
			<vl-row>
				<slot item={row.data} />
			</vl-row>
		{/each}
	</vl-contents>
</vl-viewport>

<style>
	vl-viewport {
		display: block;
		overflow-y: auto;
		position: relative;
	}

	vl-contents,
	vl-row {
		display: block;
	}

	vl-row {
		overflow: hidden;
	}
</style>
