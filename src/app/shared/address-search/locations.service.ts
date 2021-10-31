import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {delay} from 'rxjs/operators';
import {LocationInfo} from '../../models/location.model';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  constructor(private httpClient: HttpClient) {
  }

  getLocationsByQuery(query: string): Observable<Array<LocationInfo>> {
    return this.httpClient.get<Array<LocationInfo>>('/assets/mocked-data/locations.json').pipe(
      delay(300) // fake response timing
    )
  }
}
