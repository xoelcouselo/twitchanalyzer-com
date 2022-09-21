import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartInfoStreamerPanelComponent } from './start-info-streamer-panel.component';

describe('StartInfoStreamerPanelComponent', () => {
  let component: StartInfoStreamerPanelComponent;
  let fixture: ComponentFixture<StartInfoStreamerPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartInfoStreamerPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartInfoStreamerPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
