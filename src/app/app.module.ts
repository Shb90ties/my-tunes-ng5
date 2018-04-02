import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

// Modules
import { AppRoutingModule } from './app.routing';
import { UserModule } from './pages/user/user.module';

// Global-Services
import { GlobalVariablesService } from './services/global-variables/globals-variables.service';
import { GlobalEventsService } from './services/global-events/global-events.service';

// Global-Components


// Pages
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'my-tunes-ng5' }),
    HttpClientModule,
    BrowserTransferStateModule,
    UserModule,
    AppRoutingModule
  ],
  providers: [
    GlobalVariablesService,
    GlobalEventsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
