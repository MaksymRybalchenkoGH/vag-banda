import { Component, OnInit } from '@angular/core'
import { PublicApiService } from '../../services/public-api.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private apiService: PublicApiService) {}

  ngOnInit(): void {}
  public send() {
    this.apiService.tgTest().subscribe()
  }
}
