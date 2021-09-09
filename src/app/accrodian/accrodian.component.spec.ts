import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccrodianComponent } from './accrodian.component';

describe('AccrodianComponent', () => {
  let component: AccrodianComponent;
  let fixture: ComponentFixture<AccrodianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccrodianComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccrodianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
