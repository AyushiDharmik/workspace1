import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDeptComponent } from './post-dept.component';

describe('PostDeptComponent', () => {
  let component: PostDeptComponent;
  let fixture: ComponentFixture<PostDeptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostDeptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostDeptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
