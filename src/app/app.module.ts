import {ErrorHandler, LOCALE_ID, NgModule, TRANSLATIONS} from '@angular/core';
import {CoreModule} from './core/core.module';
import {AppComponent} from './app.component';
import {APP_CONFIG, AppConfig} from './configs/app.config';
import {SharedModule} from './shared/shared.module';
import {NgxExampleLibraryModule} from '@ismaestro/ngx-example-library';
import {FirebaseModule} from './shared/modules/firebase.module';
import {SentryErrorHandler} from './core/sentry.errorhandler';
import {BrowserModule} from '@angular/platform-browser';
import {I18n} from '@ngx-translate/i18n-polyfill';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {registerLocaleData} from '@angular/common';
import localeEs from '@angular/common/locales/es';
import {Routes, RouterModule} from '@angular/router';
import {JwtInterceptor} from '@shared/interfaces/jwt.interceptor';
import {ErrorInterceptor} from '@shared/interfaces/error.interceptor';
import {FakeBackendInterceptor} from '@shared/interfaces/fake-backend';

declare const require;

registerLocaleData(localeEs, 'es');

const appRoutes: Routes = [
  {
    path: '',
    loadChildren: './pages/public/public.module#PublicModule'
  },
  {
    path: 'admin',
    loadChildren: './pages/admin/admin.module#AdminModule'
  },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    BrowserModule.withServerTransition({appId: 'angularexampleapp'}),
    HttpClientModule,
    CoreModule,
    SharedModule,
    RouterModule.forRoot(appRoutes),
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    {provide: APP_CONFIG, useValue: AppConfig},
    {provide: ErrorHandler, useClass: SentryErrorHandler},
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: FakeBackendInterceptor, multi: true },
    {
      provide: TRANSLATIONS,
      useFactory: (locale) => {
        locale = locale || 'en';
        return require(`raw-loader!../i18n/messages.${locale}.xlf`);
      },
      deps: [LOCALE_ID]
    },
    I18n
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
