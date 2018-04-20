import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';

  // services
import { GlobalEventsService } from '../../services/global-events/global-events.service';
import { GlobalVariablesService } from '../../services/global-variables/global-variables.service';

interface miniMenu  {
  isOpen: boolean;
  isArrowFlipped: boolean;
};

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})

export class SideNavComponent implements OnInit {

  @Input('is-open') isSideNavOpen: boolean = false;
  public personalArea: miniMenu;
  public languages: miniMenu;
  public currLan: string;

  constructor(
    private globalEvents: GlobalEventsService,
    private globals: GlobalVariablesService
  ) { 
    this.personalArea = {
      isOpen: false,
      isArrowFlipped: false
    }
    this.languages = {
      isOpen: false,
      isArrowFlipped: false
    }
    this.currLan = 'en';
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

  togglePersonalArea(): void {
    /** toggle the personal area mini-menu, method called when the user clicks on the personal area main button */
    this.personalArea.isOpen = !this.personalArea.isOpen;
    this.toggleMiniMenuArrow(this.personalArea);
  }

  toggleLanguages(): void {
    /** toggle the languages mini-menu */
    this.languages.isOpen = !this.languages.isOpen;
    this.toggleMiniMenuArrow(this.languages);
  }

  toggleMiniMenuArrow(miniMenu: miniMenu): void {
    /** handle the mini-menu booleans in-sync with the open animntion */
    if (!miniMenu.isOpen) { // timeout for the mini-menu toggle animation
      setTimeout(() => {
        miniMenu.isArrowFlipped = false;
      }, 300);
    } else {
      miniMenu.isArrowFlipped = true;
    }
  }
  
  changeLanguage(lang: string): void {
    this.globalEvents.switchLanguage.trigger(lang);
  }
}
