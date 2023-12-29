import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() title: string;

  public displayModal: boolean;

  open() {
    this.displayModal = true;
  }

  close() {
    this.displayModal = false;
  }
}
