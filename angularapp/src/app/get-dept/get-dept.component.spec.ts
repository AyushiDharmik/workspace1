import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetDeptComponent } from './get-dept.component';

describe('GetDeptComponent', () => {
  let component: GetDeptComponent;
  let fixture: ComponentFixture<GetDeptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetDeptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetDeptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
