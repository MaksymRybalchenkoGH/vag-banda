import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router'
import {CarsList} from '../../data/cars'

@Component({
  selector: 'app-cars-page',
  templateUrl: './cars-page.component.html',
  styleUrls: ['./cars-page.component.css']
})
export class CarsPageComponent implements OnInit {
  public pageSubtitle = ''
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log('p', params)
      this.pageSubtitle = CarsList.find(car => car.brand === params.carBrand)?.title || ''
    })
  }

}
