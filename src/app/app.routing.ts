import { Routes, RouterModule } from '@angular/router';


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

export const AppRouting = RouterModule.forRoot(appRoutes);


