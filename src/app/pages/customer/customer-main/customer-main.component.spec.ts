import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerMainComponent } from './customer-main.component';

describe('CustomerMainComponent', () => {
  let component: CustomerMainComponent;
  let fixture: ComponentFixture<CustomerMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
