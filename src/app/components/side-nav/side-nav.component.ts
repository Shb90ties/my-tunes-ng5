import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';

  // services
import { GlobalEventsService } from '../../services/global-events/global-events.service';
import { GlobalVariablesService } from '../../services/global-variables/global-variables.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  public scrollTop: number = 0;
  @Input('is-open') isSideNavOpen: boolean = false;

  constructor(
    private globalEvents: GlobalEventsService,
    private globals: GlobalVariablesService
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

}
