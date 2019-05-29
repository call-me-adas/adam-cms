import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HomeComponent} from '@pages/public/home/home.component';
import {SharedModule} from '@shared/shared.module';
import {MaterialModule} from '@shared/material.module';
import {PublicComponent} from '@pages/public/public.component';
import {environment} from '@environments/environment';

@NgModule({
  imports: [
    MaterialModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: ':lang',
        component: PublicComponent,
        children: [
          {path: '', component: HomeComponent}
        ]
      },
      { path: '', redirectTo: environment.defaultLang }
    ])
  ],
  declarations: [
    HomeComponent,
    PublicComponent
  ],
  exports: []
})
export class PublicModule {
}
