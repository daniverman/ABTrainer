import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramnavComponent } from './programnav.component';

describe('ProgramnavComponent', () => {
  let component: ProgramnavComponent;
  let fixture: ComponentFixture<ProgramnavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramnavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
