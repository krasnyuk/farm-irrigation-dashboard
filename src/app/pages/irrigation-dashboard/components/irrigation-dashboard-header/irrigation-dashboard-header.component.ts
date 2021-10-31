import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-irrigation-dashboard-header',
  templateUrl: './irrigation-dashboard-header.component.html',
  styleUrls: ['./irrigation-dashboard-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IrrigationDashboardHeaderComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
