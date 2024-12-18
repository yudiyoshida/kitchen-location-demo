import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter, withComponentInputBinding, withHashLocation } from '@angular/router';
import { provideEnvironmentNgxMask } from 'ngx-mask';
import { provideSpinnerConfig } from 'ngx-spinner';
import { provideToastr } from 'ngx-toastr';
import { routes } from './app.routes';
import { bearerTokenInterceptor } from './core/interceptors/bearer-token/bearer-token.interceptor';
import { globalErrorInterceptor } from './core/interceptors/global-error/global-error.interceptor';
import { globalSpinnerInterceptor } from './core/interceptors/global-spinner/global-spinner.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withComponentInputBinding(),
      withHashLocation(),
    ),
    provideAnimationsAsync(),
    provideEnvironmentNgxMask(),
    provideSpinnerConfig({
      type: 'ball-scale-multiple',
    }),
    provideToastr({
      closeButton: true,
      positionClass: 'toast-top-right',
      timeOut: 4000,
    }),
    provideHttpClient(
      withInterceptors([
        bearerTokenInterceptor,
        globalErrorInterceptor,
        globalSpinnerInterceptor,
      ]),
    ),
  ],
};
