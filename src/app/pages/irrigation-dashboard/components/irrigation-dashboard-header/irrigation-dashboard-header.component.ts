import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {LocationInfo} from '../../../../models/location.model';

@Component({
  selector: 'app-irrigation-dashboard-header',
  templateUrl: './irrigation-dashboard-header.component.html',
  styleUrls: ['./irrigation-dashboard-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IrrigationDashboardHeaderComponent implements OnInit {
  private location = new BehaviorSubject<LocationInfo | null>(null);

  location$: Observable<LocationInfo | null> = this.location.asObservable();

  constructor() {
  }

  ngOnInit(): void {
  }

  onLocationSelected(location: LocationInfo): void {
    this.location.next(location);
  }

}
