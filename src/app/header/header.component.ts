import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() search = new EventEmitter();
  searchTerm: string;
  user: Object;
  constructor(private contactSrvc: ContactService) { }

  ngOnInit() {
    this.user = this.contactSrvc.getUserDetails();
  }

  onSearch(newValue) {
    this.search.emit(newValue);
  }

}
