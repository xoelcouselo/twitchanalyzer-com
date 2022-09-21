import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FutureProjectionsComponent } from './future-projections.component';

describe('FutureProjectionsComponent', () => {
  let component: FutureProjectionsComponent;
  let fixture: ComponentFixture<FutureProjectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FutureProjectionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FutureProjectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
