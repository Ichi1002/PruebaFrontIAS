import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryComponentsComponent } from './delivery-components.component';

describe('DeliveryComponentsComponent', () => {
  let component: DeliveryComponentsComponent;
  let fixture: ComponentFixture<DeliveryComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveryComponentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeliveryComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
