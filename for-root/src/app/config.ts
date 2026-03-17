import { InjectionToken } from '@angular/core';

export const CONFIG_TOKEN = new InjectionToken<AppConfig>('app.config');

export interface AppConfig {
  apiUrl: string;
  timeout: number;
}
