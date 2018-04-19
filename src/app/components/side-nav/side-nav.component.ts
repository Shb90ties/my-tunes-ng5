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

  @Input('is-open') isSideNavOpen: boolean = false;
  public personalArea: {
    isOpen: boolean,
    isArrowFlipped: boolean
  };

  constructor(
    private globalEvents: GlobalEventsService,
    private globals: GlobalVariablesService
  ) { 
    this.personalArea = {
      isOpen: false,
      isArrowFlipped: false
    }
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

  togglePersonalArea(): void {
    /** toggle the personal area mini-menu, method called when the user clicks on the personal area main button */
    this.personalArea.isOpen = !this.personalArea.isOpen;
    if (!this.personalArea.isOpen) { // timeout for the mini-menu toggle animation
      setTimeout(() => {
        this.personalArea.isArrowFlipped = false;
      }, 300);
    } else {
      this.personalArea.isArrowFlipped = true;
    }
  }

}
