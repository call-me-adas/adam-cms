import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HomeComponent} from '@pages/public/home/home.component';

@NgModule({
  imports: [
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
