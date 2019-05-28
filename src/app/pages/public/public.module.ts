import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HomeComponent} from '@pages/public/home/home.component';
import {SharedModule} from '@shared/shared.module';
import {MaterialModule} from '@shared/material.module';

@NgModule({
  imports: [
    MaterialModule,
    SharedModule,
    RouterModule.forChild([
      {path: '', component: HomeComponent}
    ])
  ],
  declarations: [
    HomeComponent
  ],
  exports: []
})
export class PublicModule {
}
