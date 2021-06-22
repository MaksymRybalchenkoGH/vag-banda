import { Component, OnInit, ViewEncapsulation } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Categories, Category } from '../../data/categories'
import { AppRoutes } from '../../constants/app-routes'
import { IsMobileService } from '../../services/is-mobile.service'
import { Observable } from 'rxjs'

@Component({
  selector: 'app-services-page',
  templateUrl: './services-page.component.html',
  styleUrls: ['./services-page.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ServicesPageComponent implements OnInit {
  public readonly AppRoutes = AppRoutes
  public category: Category
  public isHandset$: Observable<boolean>

  constructor(private route: ActivatedRoute, private isMobileService: IsMobileService) {
    this.isHandset$ = this.isMobileService.isHandset$()
  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.category = Categories.find(category => category.id === params.categoryId) || null
    })
  }
}
