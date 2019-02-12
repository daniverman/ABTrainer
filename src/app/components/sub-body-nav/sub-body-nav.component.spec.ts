import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubBodyNavComponent } from './sub-body-nav.component';

describe('SubBodyNavComponent', () => {
  let component: SubBodyNavComponent;
  let fixture: ComponentFixture<SubBodyNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubBodyNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubBodyNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
