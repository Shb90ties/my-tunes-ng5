import { Component, OnInit } from '@angular/core';
// services
import { GlobalEventsService } from '../../services/global-events/global-events.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private globalEvents: GlobalEventsService
  ) { }

  ngOnInit() {
  }

  toggleSideNav(): void {
    this.globalEvents.toggleSideNav.trigger();
  }

}
