import { Component, OnInit } from '@angular/core'
import { VehiclePartsList } from '../../data/vehicle-part'

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent implements OnInit {
  public readonly vehicles = VehiclePartsList
  constructor() {}

  ngOnInit(): void {}
}
