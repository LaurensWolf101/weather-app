import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ApixuService} from '../apixu.service';
import {error} from '@angular/compiler/src/util';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  public weatherSearchForm: FormGroup;
  public weatherData: any;
  public errormessage: any;

  constructor(
    private formBuilder: FormBuilder,
    private apixuService: ApixuService,
  ) {
  }

  ngOnInit() {
    this.weatherSearchForm = this.formBuilder.group({
      location: ['']
    });
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
