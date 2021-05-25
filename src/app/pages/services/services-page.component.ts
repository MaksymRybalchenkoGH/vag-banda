import { Component, OnInit } from '@angular/core';
import {CarsList} from '../../data/cars'
import {ActivatedRoute} from '@angular/router'
import {Categories, Category} from '../../data/categories'

@Component({
  selector: 'app-services-page',
  templateUrl: './services-page.component.html',
  styleUrls: ['./services-page.component.css']
})
export class ServicesPageComponent implements OnInit {
  public category: Category
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.category = Categories.find(category => category.id === params.categoryId) || null
    })
  }

}
