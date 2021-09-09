import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarPopoutComponent } from './sidebar-popout.component';

describe('SidebarPopoutComponent', () => {
  let component: SidebarPopoutComponent;
  let fixture: ComponentFixture<SidebarPopoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarPopoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarPopoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
