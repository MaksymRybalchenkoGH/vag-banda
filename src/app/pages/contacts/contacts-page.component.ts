import { Component, OnInit } from '@angular/core'
import {ContactsList} from '../../constants/contacts'

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.css']
})
export class ContactsPageComponent implements OnInit {
  public readonly contacts = ContactsList.slice(0, 1)
  constructor() {}

  ngOnInit(): void {}
}
