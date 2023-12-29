import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Address, ButtonModel } from '../../models/card.model';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'lib-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input()
  set address(value: Address) {
    this._address = value;
    this.addressForm.patchValue(value);    
    if (!value.id) this.isEditing = true;
  }

  get address(): Address {
    return this._address;
  }
  @Input() primaryButton: ButtonModel;
  @Input() secondaryButton: ButtonModel;

  @Output() saveEmit = new EventEmitter();
  @Output() cancelCreatEmit = new EventEmitter();

  public readonly addressForm = this.formBuilder.group({
    id: [''],
    mainAddress: [false],
    title: ['', Validators.required],
    street: ['', Validators.required],
    city: ['', Validators.required],
    state: ['', Validators.required],
    zipCode: ['', Validators.required],
  })

  public isEditing: boolean;

  private _address: Address;

  constructor(private formBuilder: FormBuilder) {}

  saveAddress() {
    this.saveEmit.emit({...this.addressForm.value, state: this.addressForm.value.state?.toUpperCase() });
    this.isEditing = false;
  }

  cancelEdit() {
    this.addressForm.value.id ? this.isEditing = false : this.cancelCreatEmit.emit();
  }
}
