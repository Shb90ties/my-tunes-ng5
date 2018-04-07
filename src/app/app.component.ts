import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TransferState, makeStateKey, Title, Meta } from '@angular/platform-browser';

  // services
import { GlobalEventsService } from './services/global-events/global-events.service';

  // components
import { MatDrawer } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public title: string = 'app';
  @ViewChild(MatDrawer) drawer: MatDrawer;

  // dogs: any;

  constructor(
    private http: HttpClient,
    private state: TransferState,
    private titleService: Title,
    private metaService: Meta,
    private globalEvents: GlobalEventsService
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
    this.globalEvents.setToggleSideNav(() => {
      this.drawer.toggle();
    });
  }

  @HostListener('click') something () {
    this.globalEvents.windowScrollEvents.forEach(globalEvent => {
      globalEvent.trigger();
    });
  }
}
