// Global variables, set of variables that are shared throughout all the components
// to access them import the service
// to add a variable, the variable name needs to start with '_' , the getter needs to be the variable name, setter needs to start with 'set'

import { Injectable } from '@angular/core';

@Injectable()
export class GlobalVariablesService {
  private _appName: String;
  private _headerHeight: number;
  private _isSideNavOpen: boolean;

  constructor() { 
    this._appName = 'My Tunes';
    this._headerHeight = 50; // default
    this._isSideNavOpen = false;
  }

  public appName(): String {
    return this._appName;
  }

  public headerHeight(): number {
    return this._headerHeight;
  }

  public setHeaderHeight(height: number): void {
    /** set by the header component */
    this._headerHeight = height;
  }

  public isSideNavOpen(): boolean {
    return this._isSideNavOpen;
  }

  public setIsSideNavOpen(isOpen: boolean): void {
    /** should only be set by the app component */
    this._isSideNavOpen = isOpen;
  }

}
