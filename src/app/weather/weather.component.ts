import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ApixuService} from '../apixu.service';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  public locations = new BehaviorSubject(0);
  public weatherData: any;
  public errormessage: any;

  constructor(
    private formBuilder: FormBuilder,
    private apixuService: ApixuService,
  ) {
  }

  ngOnInit() {

  }

  sendToAPIXU(formValues) {
    this.errormessage = '';
    this.apixuService
      .getWeather(formValues.location)
      .subscribe(data => this.weatherData = data);
    if (!this.weatherData.success) {
      this.errormessage = 'this place does not exist';
    }
    console.log(this.weatherData);

  }

}
