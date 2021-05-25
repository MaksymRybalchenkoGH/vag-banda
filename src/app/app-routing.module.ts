import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { AppRoutes } from './constants/app-routes'
import { HomePageComponent } from './pages/home/home-page.component'
import { AboutPageComponent } from './pages/about/about-page.component'
import { CategoriesPageComponent } from './pages/categories/categories-page.component'
import { ContactsPageComponent } from './pages/contacts/contacts-page.component'
import { NavigationHeaderHeight } from './constants/navigation-menu'
import {CarsPageComponent} from './pages/cars/cars-page.component'
import {AllowedCarBrandsGuard} from './guards/allowed-car-brands.guard'
import {ServicesPageComponent} from './pages/services/services-page.component'
import {AllowedCategoriesGuard} from './guards/allowed-category.guard'

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
        component: CategoriesPageComponent
      },
      {
        path: AppRoutes.contacts,
        component: ContactsPageComponent
      },
      {
        path: AppRoutes.cars,
        children: [
          {
            path: ':carBrand',
            component: CarsPageComponent,
            canActivate: [AllowedCarBrandsGuard],
          }
        ]
      },
      {
        path: AppRoutes.categories,
        children: [
          {
            path: ':categoryId',
            component: ServicesPageComponent,
            canActivate: [AllowedCategoriesGuard],
          }
        ]
      }
    ]
  },
  {
    path: '**',
    redirectTo: AppRoutes.home
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled', scrollOffset: [0, NavigationHeaderHeight] })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
