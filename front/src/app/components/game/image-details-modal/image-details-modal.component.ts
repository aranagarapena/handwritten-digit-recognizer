import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-image-details-modal',
  templateUrl: './image-details-modal.component.html',
  styleUrl: './image-details-modal.component.css'
})
export class ImageDetailsModalComponent {
  @Input() data: any;
  constructor(public activeModal: NgbActiveModal) { }

}
