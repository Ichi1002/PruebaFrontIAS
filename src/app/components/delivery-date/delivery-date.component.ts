import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CitiesService } from 'src/app/services/cities.service';
import { DisplayComponent } from '../display/display.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-delivery-date',
  templateUrl: './delivery-date.component.html',
  styleUrls: ['./delivery-date.component.css']
})
export class DeliveryDateComponent implements OnInit{

  dataSource : any;

  displayedColumns:string[]=['department','city','direction','time','addTime']

  constructor(private readonly citiesService:CitiesService,public dialog: MatDialog){}
  ngOnInit(): void {
    this.dataSource=this.citiesService.getAll()
    console.log(this.dataSource);

  }

  openDialog(): void {
    console.log('d');

    const dialogRef = this.dialog.open(DisplayComponent);
  }
}




