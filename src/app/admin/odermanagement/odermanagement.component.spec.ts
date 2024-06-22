import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OdermanagementComponent } from './odermanagement.component';

describe('OdermanagementComponent', () => {
  let component: OdermanagementComponent;
  let fixture: ComponentFixture<OdermanagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OdermanagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OdermanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
