import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IrigationDashboardPageComponent } from './irigation-dashboard-page.component';

describe('IrigationDashboardPageComponent', () => {
  let component: IrigationDashboardPageComponent;
  let fixture: ComponentFixture<IrigationDashboardPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IrigationDashboardPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IrigationDashboardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
