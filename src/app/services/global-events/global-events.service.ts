import { Injectable } from '@angular/core';
import { GlobalEvent } from '../../entities/global/GlobalEvent';

/*
  set a globalEvent example => GlobalEventsService.setToggleSideNav(function() { .... });
  use a globalEvent example => GlobalEventsService.toggleSideNav.trigger();
*/

@Injectable()
export class GlobalEventsService {

  public windowScrollEvents: Map<string, GlobalEvent>;
  /** map of events that gets triggered when the window is scrolled using @HostListener, executed at app.component.ts */
  public windowClickEvents: Map<string, GlobalEvent>;
  /** map of events that gets triggered when there was a click anywhere on the window using @HostListener, executed at app.component.ts */
  public toggleSideNav: GlobalEvent;

  constructor() { 
    this.toggleSideNav = new GlobalEvent();
    this.windowScrollEvents = new Map<string, GlobalEvent>();
    this.windowClickEvents = new Map<string, GlobalEvent>();
  }

  isEventValid(event): boolean {
    if (typeof event === 'function') {
      return true;
    } else {
      console.error('invlid event registered');
      return false;
    }
  }

  setToggleSideNav(event): void {
    if (this.isEventValid(event)) {
      this.toggleSideNav.set(event);
    }
  }

  addWindowScrollEvent(key, event): void {
    if (this.isEventValid(event)) {
      this.windowScrollEvents.set(key, new GlobalEvent(event));
    }
  }

  removeWindowScrollEvent(key): void {
    if (this.windowScrollEvents.get(key)) {
      this.windowScrollEvents.delete(key);
    } else {
      console.error(`no such event as ${key}`);
    }
  }

  addWindowClickEvent(key, event): void {
    if (this.isEventValid(event)) {
      this.windowClickEvents.set(key, new GlobalEvent(event));
    }
  }

  removeWindowClickEvent(key): void {
    if (this.windowScrollEvents.get(key)) {
      this.windowClickEvents.delete(key);
    } else {
      console.error(`no such event as ${key}`);
    }
  }

}
