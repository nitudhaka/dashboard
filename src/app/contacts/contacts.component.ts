import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Contact } from '../constants/contacts.constant';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  constructor() { }

  @Input() searchTerm;
  @Output() selectedContact = new EventEmitter();
  contacts: Array<Object>;

  ngOnInit() {
    this.contacts = Contact;
    this.contacts[0]['active'] = true;
  }

  selectContact(contact) {
    this.selectedContact.emit(contact);

    // for setting the tab to active
    this.contacts = this.contacts.map((val: any) => {
      if (contact.id == val.id)
        val.active = true;
      else
        val.active = false;
      return val
    });
  }

}
