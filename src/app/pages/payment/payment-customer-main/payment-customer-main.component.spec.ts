import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentCustomerMainComponent } from './payment-customer-main.component';

describe('PaymentCustomerMainComponent', () => {
  let component: PaymentCustomerMainComponent;
  let fixture: ComponentFixture<PaymentCustomerMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentCustomerMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentCustomerMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
