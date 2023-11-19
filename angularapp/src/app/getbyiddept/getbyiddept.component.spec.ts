import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetbyiddeptComponent } from './getbyiddept.component';

describe('GetbyiddeptComponent', () => {
  let component: GetbyiddeptComponent;
  let fixture: ComponentFixture<GetbyiddeptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetbyiddeptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetbyiddeptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
