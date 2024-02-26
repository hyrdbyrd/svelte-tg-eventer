import type { User } from '@/entities/user';

export const findUserById = (id: number, users: User[]) =>
	users.find((user) => id === user?.meta?.id);
