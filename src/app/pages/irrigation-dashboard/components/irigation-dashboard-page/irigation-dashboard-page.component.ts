import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-irigation-dashboard-page',
  templateUrl: './irigation-dashboard-page.component.html',
  styleUrls: ['./irigation-dashboard-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IrigationDashboardPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
