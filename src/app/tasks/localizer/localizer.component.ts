import {AfterViewInit, Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-localizer',
  templateUrl: './localizer.component.html',
  styleUrls: ['./localizer.component.css']
})
export class LocalizerComponent implements AfterViewInit {

  location: string = '';
  correctLatitude: number = 46.947;
  correctLongitude: number = 7.448;
  displayError: boolean = false;

  constructor(private httpClient: HttpClient, private router: Router) { }

  ngAfterViewInit() {
    this.getLocation();
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position)=>{
        const longitude = position.coords.longitude;
        const latitude = position.coords.latitude;
        console.log(longitude);
        console.log(latitude);
        // return this.callApi(longitude, latitude);
      });
    } else {
      console.log("No support for geolocation");
    }
  }

  checkLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position)=>{
        const longitude = position.coords.longitude;
        const latitude = position.coords.latitude;

        if (longitude.toString().startsWith(this.correctLongitude.toString()) && latitude.toString().startsWith(this.correctLatitude.toString())) {
          this.router.navigate(['tasks/two']);
        } else {
          this.displayError = true;
        }
      });
    } else {
      console.log("No support for geolocation");
    }
  }

  test() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position)=>{
        const longitude = position.coords.longitude;
        const latitude = position.coords.latitude;

        console.log(longitude);
        console.log(latitude);

        console.log("First check");
        // 46.948157
        console.log(latitude.toString().startsWith('46.94'));
        // 7.444289
        console.log(longitude.toString().startsWith('7.44'));

        console.log("2nd check");
        console.log(latitude.toString().startsWith('46.948'));
        console.log(longitude.toString().startsWith('7.444'));

        console.log("3rd check");
        console.log(latitude.toString().startsWith('46.9481'));
        console.log(longitude.toString().startsWith('7.4442'));
      });
    } else {
      console.log("No support for geolocation");
    }
  }


  callApi(Longitude: number, Latitude: number) {
    const url = `https://api-adresse.data.gouv.fr/reverse/?lon=${Longitude}&lat=${Latitude}`
    //Call API
    console.log(url);

    this.httpClient.get(url).subscribe((value) => {
      this.location = value.toString();
    });
  }
}
