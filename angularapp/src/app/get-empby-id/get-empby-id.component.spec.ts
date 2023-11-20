import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetEmpbyIdComponent } from './get-empby-id.component';

describe('GetEmpbyIdComponent', () => {
  let component: GetEmpbyIdComponent;
  let fixture: ComponentFixture<GetEmpbyIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetEmpbyIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetEmpbyIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
