import { AppRoutes, AppRoutes as AppRoute } from './app-routes'

export const NavigationHeaderHeight = 64

export interface NavigationMenuItem {
  innerHtml: string
  link: AppRoutes | string
}

export const NavigationMenu: NavigationMenuItem[] = [
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
    innerHtml: `<img width="66" src="assets/img/720-color.png" alt="bndservice logo" />`,
    link: AppRoute.banda
  }
]
