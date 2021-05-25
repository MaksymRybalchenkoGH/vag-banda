import { Component, OnInit } from '@angular/core'
import {TuningWorkshopCoordinates} from '../../../data/contacts'

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css']
})
export class GoogleMapComponent implements OnInit {
  public readonly coordinates = {
    lat: TuningWorkshopCoordinates.lat,
    lng: TuningWorkshopCoordinates.lng
  }
  public readonly zoom = 17

  constructor() {}

  ngOnInit(): void {}
}
