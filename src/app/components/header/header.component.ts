import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
// services
import { GlobalEventsService } from '../../services/global-events/global-events.service';
import { GlobalVariablesService } from '../../services/global-variables/global-variables.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @ViewChild('appHeader') el: ElementRef;
  private headerHeight: number;

  constructor(
    private globalEvents: GlobalEventsService,
    private globals: GlobalVariablesService
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.headerHeight = this.el.nativeElement.offsetHeight;
    this.globals.setHeaderHeight(this.headerHeight);
  }

  toggleSideNav(): void {
    this.globalEvents.toggleSideNav.trigger();
  }

}
