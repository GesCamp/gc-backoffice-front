import { environment } from '../environment';

export const ApiPathEnum = {
  AUTH: `${environment.baseUrl}/auth/api`,
} as const;

export type ApiPathEnum = (typeof ApiPathEnum)[keyof typeof ApiPathEnum];
