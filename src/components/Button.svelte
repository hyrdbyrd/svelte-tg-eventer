<button on:click on:pointerdown on:pointerup {...$$restProps}>
	<slot />
</button>

<style>
	button {
		cursor: pointer;

		padding: 10px 25px;
		border-radius: var(--border-radius);

		border: none;
		outline: none;

		color: var(--button-text-color);
		background: var(--button-main-color);
	}
</style>
