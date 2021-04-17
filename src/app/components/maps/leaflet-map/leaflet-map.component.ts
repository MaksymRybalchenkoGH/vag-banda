import { Component, OnInit } from '@angular/core'
import { icon, latLng, marker, tileLayer } from 'leaflet'

@Component({
  selector: 'app-leaflet-map',
  templateUrl: './leaflet-map.component.html',
  styleUrls: ['./leaflet-map.component.css']
})
export class LeafletMapComponent implements OnInit {
  readonly coordinates = {
    lat: 50.4174641,
    lng: 30.3702586
  }
  options = {
    layers: [tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 16 })],
    zoom: 15,
    center: latLng(this.coordinates.lat, this.coordinates.lng)
  }
  marker = marker([this.coordinates.lat, this.coordinates.lng], {
    icon: icon({
      iconSize: [33, 33],
      iconUrl: '../../assets/img/map-marker.svg'
    })
  })

  constructor() {}

  ngOnInit(): void {}
}
