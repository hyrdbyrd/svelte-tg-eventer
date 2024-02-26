export * from './rxjs';
export * from './events';
export * from './handlers';
export * from './telegram';
export * from './navigate';

export function isNotNil<T>(e: Nil<T>): e is T {
	return Boolean(e);
}

export function compact<T>(e: Array<Nil<T>>): T[] {
	return e.filter(isNotNil);
}
