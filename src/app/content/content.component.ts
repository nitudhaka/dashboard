import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SearchModalComponent } from '../search-modal/search-modal.component';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  @Input() contactInfo;

  constructor(private modalService: NgbModal) { }

  ngOnInit() { }

  open() {
    const modalRef = this.modalService.open(SearchModalComponent);
    modalRef.componentInstance.name = 'World';
  }

}
