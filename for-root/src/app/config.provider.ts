import { makeEnvironmentProviders, EnvironmentProviders } from '@angular/core';
import { AppConfig, CONFIG_TOKEN } from './config';
import { ConfigService } from './config.service';

export function provideAppConfig(config: AppConfig): EnvironmentProviders {
  return makeEnvironmentProviders([
    ConfigService,
    {
      provide: CONFIG_TOKEN, // Use an InjectionToken instead of a string 'config'
      useValue: config
    }
  ]);
}
