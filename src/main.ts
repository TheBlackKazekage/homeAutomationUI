import './polyfills.ts';
import './app/main.scss';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { enableProdMode } from '@angular/core';
if (environment.production) {
  enableProdMode();
}
const platform = platformBrowserDynamic();

platform.bootstrapModule(AppModule);