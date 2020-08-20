import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [ // { path: 'auth', loadChildren: () => import('src/app/auth/auth.module').then(m => m.AuthModule) }
  { path: 'entries', loadChildren: () => import('src/app/pages/entries/entries.module').then(m => m.EntriesModule)},
  { path: 'categories', loadChildren: () => import('src/app/pages/categories/categories.module').then(m => m.CategoriesModule) },
  { path: 'reports', loadChildren: () => import('src/app/pages/reports/reports.module').then(m => m.ReportsModule) },

  { path: '', redirectTo: '/reports', pathMatch: 'full' }
]; //'./pages/entries/entries.module#EntriesModule' 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
