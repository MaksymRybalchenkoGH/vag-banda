import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router'
import {Observable, of} from 'rxjs'
import {CarsList} from '../data/cars'
import {AppRoutes} from '../constants/app-routes'

@Injectable({
  providedIn: 'root'
})
export class AllowedCarBrandsGuard implements CanActivate {
  constructor(private router: Router) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const isAllowedBrand = CarsList.some(car => car.brand === route.params?.carBrand)
    if (!isAllowedBrand) {
      return this.router.createUrlTree([AppRoutes.home])
    }
    return true
  }

}
