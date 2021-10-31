import {ChangeDetectionStrategy, Component, HostBinding, OnInit, ViewEncapsulation} from '@angular/core';
import {FormControl} from '@angular/forms';
import {BehaviorSubject, Observable} from 'rxjs';

@Component({
  selector: 'app-address-search',
  templateUrl: './address-search.component.html',
  styleUrls: ['./address-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class AddressSearchComponent implements OnInit {
  private options = new BehaviorSubject([]);

  formControl = new FormControl();

  filteredOptions$: Observable<Array<any>> = this.options.asObservable();

  @HostBinding('class.address-search') baseClass = true;

  constructor() { }

  ngOnInit(): void {
  }

}
