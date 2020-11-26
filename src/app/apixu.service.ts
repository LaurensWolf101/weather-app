import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class ApixuService {

	constructor(private http: HttpClient) {}
	getWeather(location){
		return this.http.get(
			'http://api.weatherstack.com/current?access_key=3dce9e2c111c02e7024dbaa1ddb5eda0&query=' + location
			);

	}
}
