import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRecipeFirebaseComponent } from './view-recipe-firebase.component';

describe('ViewRecipeFirebaseComponent', () => {
  let component: ViewRecipeFirebaseComponent;
  let fixture: ComponentFixture<ViewRecipeFirebaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewRecipeFirebaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRecipeFirebaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
