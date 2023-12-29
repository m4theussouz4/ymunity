import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'lib-primary-button',
  templateUrl: './primary-button.component.html',
  styleUrls: ['./primary-button.component.scss']
})
export class PrimaryButtonComponent {
  @Input() label: string;
  @Input() icon: string;
  @Input() disabled: boolean;
  @Input() type: 'primary' | 'danger' = 'primary';

  @Output() onClick = new EventEmitter();
}
