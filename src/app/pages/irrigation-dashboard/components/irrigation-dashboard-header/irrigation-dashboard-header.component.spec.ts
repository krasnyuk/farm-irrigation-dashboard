import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IrrigationDashboardHeaderComponent } from './irrigation-dashboard-header.component';

describe('IrrigationDashboardHeaderComponent', () => {
  let component: IrrigationDashboardHeaderComponent;
  let fixture: ComponentFixture<IrrigationDashboardHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IrrigationDashboardHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IrrigationDashboardHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
