import { Injectable } from '@angular/core';
import { GlobalEvent } from '../../entities/global/GlobalEvent';

/*
  set a globalEvent example => GlobalEventsService.setToggleSideNav(function() { .... });
  use a globalEvent example => GlobalEventsService.toggleSideNav.trigger();
*/

@Injectable()
export class GlobalEventsService {

  public toggleSideNav: GlobalEvent;

  constructor() { 
    this.toggleSideNav = new GlobalEvent();
  }

  setToggleSideNav(event): void {
    if (typeof event === 'function') {
      this.toggleSideNav.set(event);
    } else {
      console.error('invlid event registered');
    }
  }

}
