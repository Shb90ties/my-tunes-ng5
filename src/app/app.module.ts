import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

// Material Design
// import { MdChe } from '@angular/material;

// Modules
import { AppRoutingModule } from './app.routing';
import { UserModule } from './pages/user/user.module';

// Global-Services
import { GlobalVariablesService } from './services/global-variables/global-variables.service';
import { GlobalEventsService } from './services/global-events/global-events.service';

// Api
import { HttpClientModule } from '@angular/common/http';
import { ApiHandlerPromisesService } from './services/api-handler/api-handler-promises.service';
import { ApiHandlerObservablesService } from './services/api-handler/api-handler-observables.service';

// Global-Components
import { HeaderComponent } from './components/header/header.component';

// Pages
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AboutComponent } from './pages/about/about.component';


@NgModule({
  declarations: [
      // global
    AppComponent,
    HeaderComponent,

      // pages
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
    // MdCheckboxModule
  ],
  providers: [
    GlobalVariablesService,
    GlobalEventsService,
    ApiHandlerPromisesService,
    ApiHandlerObservablesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
