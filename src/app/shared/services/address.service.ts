import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Address } from 'src/app/lib/models/card.model';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  public setAddressListData = new BehaviorSubject<Address[] | null>(null);
  public addressListData$ = this.setAddressListData.asObservable();

  constructor(private http: HttpClient) { }

  getAll(): Observable<Address[]> {
    return this.http.get<Address[]>('addressList');
  }

  save(address): Observable<Address> {
    if(address.id) return this.http.put<Address>(`addressList/${address.id}`, address);
    else return this.http.post<Address>('addressList', address);
  }

  delete(id: string) {
    return this.http.delete(`addressList/${id}`);
  }
}
