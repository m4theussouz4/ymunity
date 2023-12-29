import { Component, ViewChild } from '@angular/core';
import { Address, ButtonModel } from '../../../lib/models/card.model';
import { AddressService } from 'src/app/shared/services/address.service';
import { ModalComponent } from 'src/app/lib/components/modal/modal.component';

@Component({
  selector: 'app-units',
  templateUrl: './units.component.html',
  styleUrls: ['./units.component.scss']
})
export class UnitsComponent {
  @ViewChild('deleteModal') deleteModal: ModalComponent;

  public readonly cardPrimaryButton: ButtonModel = {
    label: 'Editar',
    icon: 'fa-pencil',
  }

  public readonly cardSecondaryButton: ButtonModel = {
    label: 'Excluir',
    icon: 'fa-trash',
    callback: () => {
      this.addressSelectedToDelele
      this.deleteModal.open();
    }
  }

  public addressList: Address[] = [];
  public addressSelectedToDelele: Address;
  
  constructor(private addressService: AddressService) {
    this.addressService.addressListData$.subscribe(data => { 
      if (!data) {
        this.addressService.getAll().subscribe(data => this.addressService.setAddressListData.next(data));
      } else {
        this.addressList = data
      }
    })
  }

  createAddresse() {
    this.addressList.unshift({
      id: '',
      mainAddress: false,
      title: '',
      street: '',
      city: '',
      state: '',
      zipCode: ''
    })
  }

  cancelAddresseCreate() {
    this.addressList.shift();
  }

  saveAddress(address) {
    this.addressService.save(address).subscribe(
      data => {
        if (!address.id) this.cancelAddresseCreate();
        // uncheck the mainAddress that was active
        if(data.mainAddress) {
          const currentMainAddress = this.addressList.find(item => item.mainAddress === true);
          if(currentMainAddress) currentMainAddress.mainAddress = false;
        }

        const addressIndex = this.addressList.findIndex(item => item.id === data.id);
        addressIndex >= 0 ? this.addressList[addressIndex] = data : this.addressList.unshift(data);

        this.addressService.setAddressListData.next(this.addressList);
      },
      () => { console.log('ocorreu um erro ao deletar o endereço') } //todo: create toast
    )
  }

  deleteAddressesConfirm(address: Address) {
    this.addressSelectedToDelele = address;
    this.deleteModal.open();
  }

  deleteAddresses() {
    this.addressService.delete(this.addressSelectedToDelele.id).subscribe(
      () => {
        const addressList = this.addressList.filter(item => item.id !== this.addressSelectedToDelele.id);
        this.addressService.setAddressListData.next(addressList);
      },
      () => { console.log('ocorreu um erro ao deletar o endereço') },
      () => { this.deleteModal.close() }
    )
  }
}
