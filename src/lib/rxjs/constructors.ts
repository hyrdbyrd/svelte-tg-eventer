import { fromEvent, map, Observable } from 'rxjs';

export function fromEventSource<Value = any>(
	url: URL | string,
	eventName: string
): Observable<Value>;

export function fromEventSource<Value = any>(
	eventSource: EventSource,
	eventName: string
): Observable<Value>;

export function fromEventSource<Value = any>(
	orStringOrUrlOrEventSource: EventSource | string | URL,
	eventName: string
): Observable<Value> {
	let eventSource: EventSource;
	if (orStringOrUrlOrEventSource instanceof EventSource) eventSource = orStringOrUrlOrEventSource;
	else eventSource = new EventSource(orStringOrUrlOrEventSource);

	return fromEvent<MessageEvent>(eventSource, eventName).pipe(
		map((event) => JSON.parse(event.data) as Value)
	);
}
