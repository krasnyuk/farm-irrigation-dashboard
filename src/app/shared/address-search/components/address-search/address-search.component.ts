import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  OnDestroy,
  OnInit,
  ViewEncapsulation,
  EventEmitter,
  Output
} from '@angular/core';
import {FormControl} from '@angular/forms';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {LocationsService} from '../../locations.service';
import {debounceTime, distinctUntilChanged, finalize, switchMap, takeUntil, tap} from 'rxjs/operators';
import {LocationInfo} from '../../../../models/location.model';

@Component({
  selector: 'app-address-search',
  templateUrl: './address-search.component.html',
  styleUrls: ['./address-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class AddressSearchComponent implements OnInit, OnDestroy {
  private locations = new BehaviorSubject<Array<LocationInfo>>([]);
  private locationsLoading = new BehaviorSubject<boolean>(false);
  private componentDestroyed$ = new Subject();
  private readonly debounceTiming = 200;

  formControl = new FormControl();

  locations$: Observable<Array<LocationInfo>> = this.locations.asObservable();
  locationsLoading$: Observable<boolean> = this.locationsLoading.asObservable();

  @HostBinding('class.address-search') baseClass = true;

  @Output() locationSelected = new EventEmitter<LocationInfo>();

  constructor(private locationsService: LocationsService) { }

  ngOnInit(): void {
    this.loadLocationsOnSearchChange();
  }

  displayFn(location: LocationInfo): string {
    return location?.title || '';
  }

  trackByFn(index: number, location: LocationInfo): string {
    return location.title; // ID will be used in real world app
  }

  selectLocation(location: LocationInfo): void {
    this.locationSelected.emit(location);
  }

  private loadLocationsOnSearchChange() {
    this.formControl.valueChanges.pipe(
      debounceTime(this.debounceTiming),
      distinctUntilChanged(),
      switchMap((searchQuery: string) => {
        this.locationsLoading.next(true);
        return this.locationsService.getLocationsByQuery(searchQuery).pipe(
          tap((locations: Array<LocationInfo>) => this.locations.next(locations)),
          finalize(() => this.locationsLoading.next(false))
        );
      }),
      takeUntil(this.componentDestroyed$)
    ).subscribe();
  }

  ngOnDestroy(): void {
    this.componentDestroyed$.next();
    this.componentDestroyed$.complete();
  }

}
