import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyviewComponent } from './bodyview.component';

describe('BodyviewComponent', () => {
  let component: BodyviewComponent;
  let fixture: ComponentFixture<BodyviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
