import { Component, OnInit } from '@angular/core'
import {Categories, Category} from '../../data/categories'

interface CatalogService {
  title: string
  img: string
}
@Component({
  selector: 'app-services-page',
  templateUrl: './services-page.component.html',
  styleUrls: ['./services-page.component.css']
})
export class ServicesPageComponent implements OnInit {
  public readonly CardHeight = 421
  // public readonly services: CatalogService[] = [
  //   {
  //     title: 'Комплексная диагносткиа автомобиля',
  //     img: 'assets/services/services-diagnostic.jpeg'
  //   },
  //   {
  //     title: 'Электроника, прошивка, доп. оборудование',
  //     img: 'assets/services/services-equipment.jpeg'
  //   },
  //   {
  //     title: 'Ремонт двигателя',
  //     img: 'assets/services/services-engine.jpeg'
  //   },
  //   {
  //     title: 'Ремонт ходовой',
  //     img: 'assets/services/services-chassis.jpeg'
  //   }
  // ]
  public readonly categories: Category[] = Categories
  constructor() {}

  ngOnInit(): void {}
}
