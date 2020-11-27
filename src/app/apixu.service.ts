import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

let json;

@Injectable({
  // tslint:disable-next-line:indent
  providedIn: 'root'
})
export class ApixuService {
  public weatherData: any;
  json = {};

  constructor(private http: HttpClient) {
  }

  getWeather(location) {
    json = this.http.get('http://api.weatherstack.com/current?access_key=3dce9e2c111c02e7024dbaa1ddb5eda0&query=' + location);
    return json;
  }
}
