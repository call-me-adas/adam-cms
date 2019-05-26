import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {DashboardComponent} from '@pages/admin/dashboard/dashboard.component';
import {LoginComponent} from '@pages/admin/login/login.component';
import {SharedModule} from '@shared/shared.module';
import {AuthGuard} from '@guardsauth.guard';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: DashboardComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'login',
        component: LoginComponent
      },
    ])
  ],
  declarations: [
    LoginComponent,
    DashboardComponent
  ],
  exports: []
})
export class AdminModule {
}

// import { AuthGuard } from './shared/guards/auth.guard';
// import { Role } from './shared/models/role.model';
// canActivate: [AuthGuard]
// data: { roles: [Role.Admin] }
