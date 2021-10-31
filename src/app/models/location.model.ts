import {WeatherInfo} from './weather-info.model';

export interface LocationInfo {
  title: string;
  weatherInfo: WeatherInfo;
  dateTime: string;
}
