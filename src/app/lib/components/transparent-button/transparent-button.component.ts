import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'lib-transparent-button',
  templateUrl: './transparent-button.component.html',
  styleUrls: ['./transparent-button.component.scss']
})
export class TransparentButtonComponent {
  @Input() label: string;
  @Input() icon: string;
  @Input() type: 'primary' | 'danger' = 'primary';

  @Output() onClick = new EventEmitter();
}
