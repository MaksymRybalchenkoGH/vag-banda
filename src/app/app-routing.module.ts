import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { AppRoutes } from './constants/app-routes'
import { HomePageComponent } from './pages/home/home-page.component'
import { AboutPageComponent } from './pages/about/about-page.component'
import { ServicesPageComponent } from './pages/services/services-page.component'
import { ContactsPageComponent } from './pages/contacts/contacts-page.component'
import { NavigationHeaderHeight } from './constants/navigation-menu'

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: AppRoutes.home,
        pathMatch: 'full'
      },
      {
        path: AppRoutes.home,
        component: HomePageComponent
      },
      {
        path: AppRoutes.main,
        component: HomePageComponent
      },
      {
        path: AppRoutes.about,
        component: AboutPageComponent
      },
      {
        path: AppRoutes.services,
        component: ServicesPageComponent
      },
      {
        path: AppRoutes.contacts,
        component: ContactsPageComponent
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled', scrollOffset: [0, NavigationHeaderHeight] })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
