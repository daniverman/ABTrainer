import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodynavComponent } from './bodynav.component';

describe('BodynavComponent', () => {
  let component: BodynavComponent;
  let fixture: ComponentFixture<BodynavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodynavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodynavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
