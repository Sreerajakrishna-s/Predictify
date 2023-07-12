import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface WeatherData {
  city: string;
}

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  APIKey: string = '6492527f849e5034d485df6b5981d407';

  constructor(private http: HttpClient) { }

  getData(data: WeatherData) {
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?q=' + data.city + '&appid=' + this.APIKey);
  }

}
