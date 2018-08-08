import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemplifyComponent } from './exemplify.component';

describe('ExemplifyComponent', () => {
  let component: ExemplifyComponent;
  let fixture: ComponentFixture<ExemplifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExemplifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExemplifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
