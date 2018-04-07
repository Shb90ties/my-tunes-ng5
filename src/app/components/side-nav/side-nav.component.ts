import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { GlobalEventsService } from '../../services/global-events/global-events.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  @ViewChild('appSideNav') el: ElementRef;

  constructor(
    private globalEvents: GlobalEventsService
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.globalEvents.addWindowScrollEvent('sidenav-scroll', () => {
      if (this.el) {
        console.log('calculate <>>> ', this.el);
      }
    });
  }

}
