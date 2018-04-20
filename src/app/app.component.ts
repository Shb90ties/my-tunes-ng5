import { Component, OnInit, ViewChild, HostListener, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TransferState, makeStateKey, Title, Meta } from '@angular/platform-browser';

  // services
import { GlobalEventsService } from './services/global-events/global-events.service';
import { GlobalVariablesService } from './services/global-variables/global-variables.service';
import { TranslateService } from '@ngx-translate/core';

  // components
import { MatDrawer } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public user = {
    name: 'my-tunes'
  };
  public title: string = 'app';
  public isSideNavOpen: boolean = false;
  @ViewChild(MatDrawer) drawer: MatDrawer;

  // dogs: any;

  constructor(
    private http: HttpClient,
    private state: TransferState,
    private titleService: Title,
    private metaService: Meta,
    private globalEvents: GlobalEventsService,
    private globals: GlobalVariablesService,
    private translate: TranslateService
  ) {
    try {
      let browserLan = translate.getBrowserLang();
      translate.setDefaultLang(browserLan.match(/en|he/) ? browserLan : 'en');
    } catch (e) {
      translate.setDefaultLang('en');
    }
  }

  ngOnInit() {
    // this.dogs = this.state.get(DOGS_KEY, null as any);

    // if (!this.dogs) {
    //   this.http
    //     .get('https://dog.ceo/api/breeds/list/all')
    //     .subscribe(data => {
    //       this.dogs = data;
    //       this.state.set(DOGS_KEY, data as any);
    //     });
    // }

    this.titleService.setTitle('My Tunes');
    this.metaService.addTag({name: 'description', content: 'find them all!'});
  }

  switchLanguage(language: string): void {
    this.translate.use(language);
  }

  ngAfterViewInit() {
    this.setSideNavGlobaly();
    this.setLanguageSwitcherGlobaly();
  }

  private setSideNavGlobaly() {
      /** links the drawer component open/close events to the global variables
       *  allows other components to know if its open or not
       *  link a toggle fuunction to the global events, allows other components to toggle it from the global events service */
    this.globalEvents.setToggleSideNav(() => {
      this.drawer.toggle();
    });

    this.drawer.openedStart.subscribe(() => {
      this.isSideNavOpen = true;
      this.globals.setIsSideNavOpen(this.isSideNavOpen);
    });

    this.drawer.closedStart.subscribe(() => {
      this.isSideNavOpen = false;
      this.globals.setIsSideNavOpen(this.isSideNavOpen);
    });
  }

  private setLanguageSwitcherGlobaly() {
    /** sets the switch language to the global events
     * to use in other components => globalEventsService.switchLanguage.trigger('he');
     */
    this.globalEvents.setSwitchLanguage((language) => {
      this.switchLanguage(language);
    });
  }

  @HostListener('window:scroll', ['$event']) private runScrollEvents ($event): void {
      /** runs when the user scrolls, triggers a map of events from the global-events service */
    if (this.globalEvents.windowScrollEvents.size > 0) {
      this.globalEvents.windowScrollEvents.forEach(globalEvent => {
        globalEvent.trigger($event);
      });
    }
  }

  @HostListener('window:click', ['$event']) private runClickEvents ($event): void {
    /** runs when the user clicks on the screen, triggers a map of events from the global-events service */
    if (this.globalEvents.windowClickEvents.size > 0) {
      this.globalEvents.windowClickEvents.forEach(globalEvent => {
        globalEvent.trigger($event);
      });
    }
  }
}
