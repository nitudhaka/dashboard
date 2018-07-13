import { Component, OnInit } from '@angular/core';
import { ContactService } from './services/contact.service';
import { Contact } from './constants/contacts.constant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ContactService]
})
export class AppComponent implements OnInit {

  contactInfo;
  sValue: string;
  constructor(private contactSrvc: ContactService) { }
  ngOnInit() {
    this.contactInfo = this.contactSrvc.getContactInfo(Contact[0].id);
  }

  onSelect(event) {
    this.contactInfo = this.contactSrvc.getContactInfo(event.id);
  }

  setSearch(event) {
    this.sValue = event;
  }


}
