import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IrigationDashboardPageComponent} from './components/irigation-dashboard-page/irigation-dashboard-page.component';
import {IrrigationDashboardRoutingModule} from './irrigation-dashoard-routing.module';
import { IrrigationDashboardHeaderComponent } from './components/irrigation-dashboard-header/irrigation-dashboard-header.component';
import { WeatherWidgetComponent } from './components/weather-widget/weather-widget.component';
import { DateWidgetComponent } from './components/date-widget/date-widget.component';
import { UserAccountComponent } from './components/user-account/user-account.component';
import {AddressSearchModule} from '../../shared/address-search/address-search.module';


@NgModule({
  declarations: [IrigationDashboardPageComponent, IrrigationDashboardHeaderComponent, WeatherWidgetComponent, DateWidgetComponent, UserAccountComponent],
  imports: [
    CommonModule,
    IrrigationDashboardRoutingModule,
    AddressSearchModule
  ]
})
export class IrrigationDashboardModule { }
