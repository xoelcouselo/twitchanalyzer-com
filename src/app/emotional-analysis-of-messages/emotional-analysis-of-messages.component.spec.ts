import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmotionalAnalysisOfMessagesComponent } from './emotional-analysis-of-messages.component';

describe('EmotionalAnalysisOfMessagesComponent', () => {
  let component: EmotionalAnalysisOfMessagesComponent;
  let fixture: ComponentFixture<EmotionalAnalysisOfMessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmotionalAnalysisOfMessagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmotionalAnalysisOfMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
