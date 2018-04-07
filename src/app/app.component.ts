import { Component, OnInit, ViewChild, HostListener, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TransferState, makeStateKey, Title, Meta } from '@angular/platform-browser';

  // services
import { GlobalEventsService } from './services/global-events/global-events.service';
import { GlobalVariablesService } from './services/global-variables/global-variables.service';

  // components
import { MatDrawer } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

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
    private globals: GlobalVariablesService
  ) { }

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

  ngAfterViewInit() {
    this.setSideNavGlobaly();
  }

  private setSideNavGlobaly() {
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

  @HostListener('window:scroll', ['$event']) private runScrollEvents ($event): void {
    this.globalEvents.windowScrollEvents.forEach(globalEvent => {
      globalEvent.trigger($event);
    });
  }

  @HostListener('window:click', ['$event']) private runClickEvents ($event): void {
    this.globalEvents.windowClickEvents.forEach(globalEvent => {
      globalEvent.trigger($event);
    });
  }
}
