import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideGetErrorMessageFunc } from '@likdan/form-builder-material';

export const appConfig: ApplicationConfig = {
    providers: [
      provideGetErrorMessageFunc(k => k.charAt(0).toUpperCase() + k.substring(1).toLowerCase()),
      provideZoneChangeDetection({ eventCoalescing: true }),
      provideRouter(routes),
      provideAnimations(),
      provideHttpClient(),
    ],
  }
;
