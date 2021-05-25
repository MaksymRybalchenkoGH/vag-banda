import { Injectable } from '@angular/core'
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router'
import {Observable} from 'rxjs'
import {AppRoutes} from '../constants/app-routes'
import {Categories} from '../data/categories'

@Injectable({
  providedIn: 'root'
})
export class AllowedCategoriesGuard implements CanActivate {
  constructor(private router: Router) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const isAllowedCategory = Categories.some(category => category.id === route.params?.categoryId)
    if (!isAllowedCategory) {
      return this.router.createUrlTree([AppRoutes.home])
    }
    return true
  }

}
