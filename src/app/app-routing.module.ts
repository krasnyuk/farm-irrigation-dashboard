import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'irrigation-dashboard'
  },
  {
    path: 'irrigation-dashboard',
    loadChildren: () => import('./pages/irrigation-dashboard/irrigation-dashboard.module').then(m => m.IrrigationDashboardModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
