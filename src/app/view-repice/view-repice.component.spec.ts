import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRepiceComponent } from './view-repice.component';

describe('ViewRepiceComponent', () => {
  let component: ViewRepiceComponent;
  let fixture: ComponentFixture<ViewRepiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewRepiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRepiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
