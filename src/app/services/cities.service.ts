import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Department } from '../interfaces/department';
import { Cities } from '../interfaces/cities';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  deliverySubject = new BehaviorSubject<any>([]);
  delivery$ = this.deliverySubject.asObservable();

  constructor( private readonly httt:HttpClient) { }
   url :string = 'https://api-colombia.com/api/v1/Department';

  getDepartment():Observable<Department[]>{
    return this.httt.get<Department[]>(this.url)
  }

  getCities(idDepartment:number):Observable<Cities[]>{
    return this.httt.get<Cities[]>(`${this.url}/${idDepartment}/cities`)
  }

  getAll(){
    return this.deliverySubject.getValue();
  }

  addDelivery(add:any){
  const data = this.getAll();
  const updateData = [...data,add]
  this.deliverySubject.next(updateData);
  }

}
