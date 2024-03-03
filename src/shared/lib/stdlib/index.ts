type Falsy<T> = Nil<T> | 0 | false | '';

export function isNotNil<T>(e: Falsy<T>): e is T {
	return Boolean(e);
}

export function compact<T>(e: Array<Falsy<T>>): T[] {
	return e.filter(isNotNil);
}
