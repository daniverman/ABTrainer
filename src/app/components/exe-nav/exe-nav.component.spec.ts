import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExeNavComponent } from './exe-nav.component';

describe('ExeNavComponent', () => {
  let component: ExeNavComponent;
  let fixture: ComponentFixture<ExeNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExeNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExeNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
