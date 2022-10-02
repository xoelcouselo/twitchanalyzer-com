import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicAnalyticsComponent } from './basic-analytics.component';

describe('BasicAnalyticsComponent', () => {
  let component: BasicAnalyticsComponent;
  let fixture: ComponentFixture<BasicAnalyticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BasicAnalyticsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BasicAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
