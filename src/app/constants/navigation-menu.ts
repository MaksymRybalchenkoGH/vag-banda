import {NavigationMenuItem} from '../models/navigation-menu-item'
import {AppRoutes as AppRoute} from './app-routes'

export const NavigationHeaderHeight = 64
export const  NavigationMenu: NavigationMenuItem[] = [
  {
    innerHtml: 'Главная',
    link: AppRoute.home
  },
  {
    innerHtml: 'O нас',
    link: AppRoute.about
  },
  {
    innerHtml: 'Услуги',
    link: AppRoute.services
  },
  {
    innerHtml: 'Контакты',
    link: AppRoute.contacts
  },
  {
    innerHtml: `<img width="50" src="/assets/img/vag-banda-logo.png" alt="bndservice logo" />`,
    link: AppRoute.banda
  }
]
