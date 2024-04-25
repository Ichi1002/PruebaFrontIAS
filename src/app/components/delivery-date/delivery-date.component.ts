import { Component, OnInit } from '@angular/core';
import { CitiesService } from 'src/app/services/cities.service';

@Component({
  selector: 'app-delivery-date',
  templateUrl: './delivery-date.component.html',
  styleUrls: ['./delivery-date.component.css']
})
export class DeliveryDateComponent implements OnInit{

  dataSource : any;

  displayedColumns:string[]=['department','city','direction','time','addTime']

  constructor(private readonly citiesService:CitiesService){}
  ngOnInit(): void {
    this.dataSource=this.citiesService.getAll()
    console.log(this.dataSource);

  }




}
