import { Routes, RouterModule } from '@angular/router';


const appRoutes: Routes = [
  {
    path: 'admin',
    loadChildren: './pages/public/public.module#PublicModule'
  },
  {
    path: '',
    loadChildren: './pages/admin/admin.module#AdminModule'
  },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

export const AppRouting = RouterModule.forRoot(appRoutes);


