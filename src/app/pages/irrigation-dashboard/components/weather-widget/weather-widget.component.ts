import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';
import {WeatherInfo} from '../../../../models/weather-info.model';

@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeatherWidgetComponent implements OnInit {
  @Input() weatherInfo: WeatherInfo = {
    currentTemperature: 23,
    maxTemperature: 25,
    minTemperature: 16,
    description: 'Sunny'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
