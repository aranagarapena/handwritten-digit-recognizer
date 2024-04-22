import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Drawing } from '../../../models/drawing.model';

@Component({
  selector: 'app-image-details-modal',
  templateUrl: './image-details-modal.component.html',
  styleUrl: './image-details-modal.component.css'
})
export class ImageDetailsModalComponent {
  // @Input() data: any;
  @Input() drawing!: Drawing;
  constructor(public activeModal: NgbActiveModal) { }

  closeModal(): void {
    this.activeModal.dismiss();
  }
}
