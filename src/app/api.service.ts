import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  //Gets a random idea if you are just bored
  getBoredRandom() {
    let url = "https://www.boredapi.com/api/activity/";
    return this.http.get(url);
  }

  //Gets a relax idea
  getRelax() {
    let url = "http://www.boredapi.com/api/activity?type=relaxation";
    return this.http.get(url);
  }

  //Gets a social idea
  getSocial() {
    let url = "http://www.boredapi.com/api/activity?type=social";
    return this.http.get(url);
  }

  //Get a recreational idea
  getRecreational() {
    let url = "http://www.boredapi.com/api/activity?type=recreational";
    return this.http.get(url);
  }

  //Get a busywork idea
  getBusy() {
    let url = "http://www.boredapi.com/api/activity?type=busywork";
    return this.http.get(url);
  }

  //Get a cooking idea
  getCooking() {
    let url = "http://www.boredapi.com/api/activity?type=cooking";
    return this.http.get(url);
  }

  //Get an educational idea
  getEducation() {
    let url = "http://www.boredapi.com/api/activity?type=education";
    return this.http.get(url);
  }

  //Get a charity idea
  getCharity() {
    let url = "http://www.boredapi.com/api/activity?type=charity";
    return this.http.get(url);
  }

  //Get a DIY idea
  getDiy() {
    let url = "http://www.boredapi.com/api/activity?type=diy";
    return this.http.get(url);
  }

  //Get a music idea
  getMusic() {
    let url = "http://www.boredapi.com/api/activity?type=music";
    return this.http.get(url);
  }
}
