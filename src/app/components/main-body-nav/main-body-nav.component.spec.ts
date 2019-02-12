import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainBodyNavComponent } from './main-body-nav.component';

describe('MainBodyNavComponent', () => {
  let component: MainBodyNavComponent;
  let fixture: ComponentFixture<MainBodyNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainBodyNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainBodyNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
