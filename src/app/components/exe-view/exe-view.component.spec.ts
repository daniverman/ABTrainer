import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExeViewComponent } from './exe-view.component';

describe('ExeViewComponent', () => {
  let component: ExeViewComponent;
  let fixture: ComponentFixture<ExeViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExeViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
