import {Component, Input, OnInit} from '@angular/core'

@Component({
  selector: 'app-company-title-block',
  templateUrl: './company-title-block.component.html',
  styleUrls: ['./company-title-block.component.css']
})
export class CompanyTitleBlockComponent implements OnInit {
  @Input() subtitle = ''

  constructor() { }

  ngOnInit(): void {
  }

}
