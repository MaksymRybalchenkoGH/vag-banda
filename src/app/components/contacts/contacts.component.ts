import {Component, Input } from '@angular/core'
import {ContactModel, ContactsList} from '../../data/contacts'

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {
  @Input() contacts: ContactModel[] = ContactsList
  @Input() isVertical = true
  @Input() isLarge = false

  constructor() { }
}
