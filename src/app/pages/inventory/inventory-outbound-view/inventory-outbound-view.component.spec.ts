import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryOutboundViewComponent } from './inventory-outbound-view.component';

describe('InventoryOutboundViewComponent', () => {
  let component: InventoryOutboundViewComponent;
  let fixture: ComponentFixture<InventoryOutboundViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryOutboundViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryOutboundViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
