import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cities } from 'src/app/interfaces/cities';
import { Department } from 'src/app/interfaces/department';
import { CitiesService } from 'src/app/services/cities.service';

@Component({
  selector: 'app-delivery-components',
  templateUrl: './delivery-components.component.html',
  styleUrls: ['./delivery-components.component.css'],
})
export class DeliveryComponentsComponent implements OnInit {
  constructor(
    private readonly citiesService: CitiesService,
    private readonly formBuilder: FormBuilder
  ) {}

  deliveryForm!: FormGroup;
  departmentList: Department[] = [];
  cityList: Cities[] = [];

  ngOnInit(): void {
    this.citiesService.getDepartment().subscribe((data) => {
      data.forEach((department: Department) => {
        this.departmentList.push(department);
      });
    });

    this.deliveryForm = this.formBuilder.group({
      department:['',Validators.required],
      city:['',Validators.required],
      direction : ['',Validators.required]
    })
  }

  findCity(departmentId: number) {
    this.cityList = [];
    this.citiesService.getCities(departmentId).subscribe((data) => {
      data.forEach((city: Cities) => {
        this.cityList.push(city);
      });
    });
  }

  guardar(){
    if(this.deliveryForm.invalid)
      return
    this.citiesService.addDelivery(this.deliveryForm.value)
  }
}
