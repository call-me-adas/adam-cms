import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {DashboardComponent} from '@pages/admin/dashboard/dashboard.component';
import {LoginComponent} from '@pages/admin/login/login.component';
import {SharedModule} from '@shared/shared.module';
import {AuthGuard} from '@guardsauth.guard';
import { CKEditorModule } from 'ng2-ckeditor';
import {MaterialModule} from '@shared/material.module';
import {PagesComponent} from '@pages/admin/dashboard/pages/pages.component';
import {EditPostComponent} from '@pages/admin/dashboard/posts/edit-post/edit-post.component';
import {ListPostsComponent} from '@pages/admin/dashboard/posts/list-posts/list-posts.component';
import {AddPostComponent} from '@pages/admin/dashboard/posts/add-post/add-post.component';
import {TableComponent} from '@pages/admin/dashboard/posts/list-posts/table/table.component';
import {DialogYesNoComponent} from '@app/components/dialog-yes-no/dialog-yes-no.component';

@NgModule({
  imports: [
    SharedModule,
    MaterialModule,
    RouterModule.forChild([
      {
        path: '',
        component: DashboardComponent,
        canActivate: [AuthGuard],
        children: [
          {
            path:  'posts',
            children: [
              {
                path:  '',
                component:  ListPostsComponent,
              },
              {
                path:  'add',
                component:  AddPostComponent,
              },
              {
                path:  'edit/:id',
                component:  EditPostComponent,
              }
            ]
          },
          {
            path:  'pages',
            component:  PagesComponent
          },
          { path: '', redirectTo: 'posts' }
        ]
      },
      {
        path: 'login',
        component: LoginComponent
      },
    ]),
    CKEditorModule
  ],
  declarations: [
    LoginComponent,
    AddPostComponent,
    EditPostComponent,
    TableComponent,
    DialogYesNoComponent,
    ListPostsComponent,
    PagesComponent,
    DashboardComponent
  ],
  entryComponents: [DialogYesNoComponent],
  exports: []
})
export class AdminModule {
}

// import { AuthGuard } from './shared/guards/auth.guard';
// import { Role } from './shared/models/role.model';
// canActivate: [AuthGuard]
// data: { roles: [Role.Admin] }
