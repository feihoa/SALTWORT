import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { FILESTACK_BASE_PICKER_OPTIONS, provideFileStack } from 'angular-filestack';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFileStack('AI3YBGdlGT7SmeZ8DkK8Lz'),
    {
      provide: FILESTACK_BASE_PICKER_OPTIONS,
      useValue: {
        accept: ['.png', '.jpg'],
      }
    }
  ]
};
