import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HomeComponent} from '@pages/public/home/home.component';
import {SharedModule} from '@shared/shared.module';
import {MaterialModule} from '@shared/modules/material.module';
import {PublicComponent} from '@pages/public/public.component';
import {environment} from '@environments/environment';
import {PostComponent} from '@pages/public/post/post.component';
import {NotFoundComponent} from '@pages/public/not-found/not-found.component';

@NgModule({
  imports: [
    MaterialModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: ':lang',
        component: PublicComponent,
        children: [
          {path: '', component: HomeComponent},
          {path: 'post/:id', component: PostComponent},
          {path: 'not-found', component: NotFoundComponent}
        ]
      },
      { path: '', redirectTo: environment.defaultLang }
    ])
  ],
  declarations: [
    HomeComponent,
    PublicComponent,
    NotFoundComponent,
    PostComponent
  ],
  exports: []
})
export class PublicModule {
}
