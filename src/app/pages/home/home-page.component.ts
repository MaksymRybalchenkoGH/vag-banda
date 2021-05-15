import { Component, OnInit } from '@angular/core'
import { PublicApiService } from '../../services/public-api.service'
import { FormControl, FormGroup } from '@angular/forms'
import { AppRoutes } from '../../constants/app-routes'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  public readonly appRoutes = AppRoutes
  constructor() {}

  ngOnInit(): void {}
}
