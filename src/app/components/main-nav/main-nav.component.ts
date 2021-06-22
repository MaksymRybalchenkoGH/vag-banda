import { Component } from '@angular/core'
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout'
import { Observable } from 'rxjs'
import { map, shareReplay, take } from 'rxjs/operators'
import { AppRoutes } from '../../constants/app-routes'
import { NavigationHeaderHeight, NavigationMenu } from '../../constants/navigation-menu'
import { MainContacts } from '../../data/contacts'
import { IsMobileService } from '../../services/is-mobile.service'

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent {
  public readonly HeaderHeight = NavigationHeaderHeight
  public readonly navigationMenu = NavigationMenu
  public readonly appRoutes = AppRoutes
  public readonly contacts = MainContacts

  public isHandset$: Observable<boolean>

  constructor(private isMobileService: IsMobileService) {
    this.isHandset$ = this.isMobileService.isHandset$()
  }
}
