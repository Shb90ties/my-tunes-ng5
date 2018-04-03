import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

// Material Design
import { MdCheckboxModule } from '@angular/material';

// Modules
import { AppRoutingModule } from './app.routing';
import { UserModule } from './pages/user/user.module';

// Global-Services
import { GlobalVariablesService } from './services/global-variables/global-variables.service';
import { GlobalEventsService } from './services/global-events/global-events.service';

// Global-Components


// Pages
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AboutComponent } from './pages/about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'my-tunes-ng5' }),
    BrowserAnimationsModule,
    HttpClientModule,
    BrowserTransferStateModule,
    UserModule,
    AppRoutingModule,
    MdCheckboxModule
  ],
  providers: [
    GlobalVariablesService,
    GlobalEventsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
