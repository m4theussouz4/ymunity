import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'lib-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @Input() label:  string;
  @Input() formGroup: FormGroup;
  @Input() controlName: string;
  @Input() placeholder: string;
  @Input() inputType: string = 'text';
  @Input() mask: string;
  @Input() dropSpecialCharacters: boolean;
  @Input() uppercase: boolean;
}
