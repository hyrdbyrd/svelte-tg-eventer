export type FeatureName = keyof typeof FeatureName;
export const FeatureName = {
	IS_RUFFLE_ALLOWED: 'IS_RUFFLE_ALLOWED',
	IS_CUSTOM_MEETINGS_ALLOWED: 'IS_CUSTOM_MEETINGS_ALLOWED',
};

export interface HiByeEvent {
	eventId: number;
	eventName: string;
	features: FeatureName[];
}
