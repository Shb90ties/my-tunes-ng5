import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

// Services
import { GlobalsService } from './services/globals/globals.service';

// Pages
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';

// Components

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'my-tunes-ng5' }),
    HttpClientModule,
    BrowserTransferStateModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: '**', redirectTo: '/' }
    ])
  ],
  providers: [GlobalsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
