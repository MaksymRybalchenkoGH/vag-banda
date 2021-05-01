import { Component } from '@angular/core'
import {AppRoutes} from './constants/app-routes'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public readonly appRoutes = AppRoutes
}
