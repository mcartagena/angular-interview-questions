import { Injectable, Inject } from '@angular/core';
import { AppConfig, CONFIG_TOKEN } from './config';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  configFoo?: AppConfig;

  constructor(@Inject(CONFIG_TOKEN) private config: AppConfig) {
    console.log('Loaded Config:', this.config.apiUrl);
    this.configFoo = this.config;
  }
}
