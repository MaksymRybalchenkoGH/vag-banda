import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css']
})
export class GoogleMapComponent implements OnInit {
  readonly coordinates = {
    lat: 50.4174641,
    lng: 30.3702586
  }

  constructor() {}

  ngOnInit(): void {}
}
