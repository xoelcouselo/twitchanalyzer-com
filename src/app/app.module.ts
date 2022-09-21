import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RankingComponent } from './ranking/ranking.component';
import { LandingHomeComponent } from './landing-home/landing-home.component';
import { FooterComponent } from './footer/footer.component';
import { BasicAnalyticsComponent } from './basic-analytics/basic-analytics.component';
import { FutureProjectionsComponent } from './future-projections/future-projections.component';
import { EmotionalAnalysisOfMessagesComponent } from './emotional-analysis-of-messages/emotional-analysis-of-messages.component';
import { UserLoyaltyComponent } from './user-loyalty/user-loyalty.component';
import { StartInfoStreamerPanelComponent } from './start-info-streamer-panel/start-info-streamer-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RankingComponent,
    LandingHomeComponent,
    FooterComponent,
    BasicAnalyticsComponent,
    FutureProjectionsComponent,
    EmotionalAnalysisOfMessagesComponent,
    UserLoyaltyComponent,
    StartInfoStreamerPanelComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
