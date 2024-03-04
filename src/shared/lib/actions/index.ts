export function dotsTicker(node: HTMLElement) {
	let dotsCount = 0;
	let intervalId: NodeJS.Timeout | number = 0;

	const originalText = node.innerText;

	function reset() {
		intervalId = setInterval(() => {
			dotsCount++;

			if (dotsCount >= 4) {
				console.log('AAA', node.innerText, node.innerText.slice(0, -6));
				dotsCount = 0;
				node.innerText = originalText;
			}

			node.innerText = originalText + '.'.repeat(dotsCount);
		}, 1000);
	}

	reset();

	return {
		update() {
			clearInterval(intervalId);
			reset();
		},
		destroy() {
			clearInterval(intervalId);
		},
	};
}
