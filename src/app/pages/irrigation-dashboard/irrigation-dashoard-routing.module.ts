import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IrigationDashboardPageComponent} from './components/irigation-dashboard-page/irigation-dashboard-page.component';

const routes: Routes = [
  {
    path: '',
    component: IrigationDashboardPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IrrigationDashboardRoutingModule {
}
