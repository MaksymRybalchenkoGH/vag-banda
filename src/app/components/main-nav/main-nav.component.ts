import { Component } from '@angular/core'
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout'
import { Observable } from 'rxjs'
import { map, shareReplay } from 'rxjs/operators'
import { AppRoutes } from '../../constants/app-routes'
import { NavigationHeaderHeight, NavigationMenu } from '../../constants/navigation-menu'
import {MainContacts} from '../../constants/contacts'

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


  public isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(result => result.matches),
    shareReplay()
  )

  constructor(private breakpointObserver: BreakpointObserver) {}
}
