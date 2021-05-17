import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css']
})
export class GoogleMapComponent implements OnInit {
  public readonly coordinates = {
    lat: 50.4074537,
    lng: 30.3777295
  }
  public readonly zoom = 15

  constructor() {}

  ngOnInit(): void {}
}
