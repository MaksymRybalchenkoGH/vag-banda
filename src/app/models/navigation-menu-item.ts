import {AppRoutes} from '../constants/app-routes'

export interface NavigationMenuItem {
  innerHtml: string
  link: AppRoutes | string
}
