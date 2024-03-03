import type { FeatureName } from '../lib/types';

export interface ApiFeature {
	isAllowed: boolean;
	featureName: FeatureName;
}

export interface ApiEvent {
	eventId: number;
	eventName: string;
	features: ApiFeature[];
}
