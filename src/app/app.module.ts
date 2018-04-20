import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, RouterLink } from '@angular/router';

import { AppComponent } from './app.component';

// Api
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ApiHandlerService } from './services/api-handler/api-handler.service';
import { AsyncApiHanderService } from './services/async-api-handler/async-api-hander.service';

// Translate
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// Plugins
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { MatSidenavModule } from '@angular/material/sidenav';
// import { MdChe } from '@angular/material;

// Modules
import { AppRoutingModule } from './app.routing';
import { UserModule } from './pages/user/user.module';

// Global-Services
import { GlobalVariablesService } from './services/global-variables/global-variables.service';
import { GlobalEventsService } from './services/global-events/global-events.service';

// Global-Components
import { HeaderComponent } from './components/header/header.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { FooterComponent } from './components/footer/footer.component';

// Pages
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AboutComponent } from './pages/about/about.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
  declarations: [
      // global
    AppComponent,
    HeaderComponent,
    SideNavComponent,
    FooterComponent,

      // pages
    HomeComponent,
    NotFoundComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'my-tunes-ng5' }),
    BrowserAnimationsModule,
    AngularFontAwesomeModule,
    HttpClientModule,
    BrowserTransferStateModule,
          // translate
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),

      // angular material
    MatSidenavModule,

      // app-modules
    UserModule,
    AppRoutingModule,
  ],
  providers: [
    GlobalVariablesService,
    GlobalEventsService,
    ApiHandlerService,
    AsyncApiHanderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
