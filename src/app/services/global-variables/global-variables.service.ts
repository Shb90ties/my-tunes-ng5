import { Injectable } from '@angular/core';

@Injectable()
export class GlobalVariablesService {
  private appName: String;
  private headerHeight: number;

  constructor() { 
    this.appName = 'My Tunes';
    this.headerHeight = 50; // default
  }

  public getAppName(): String {
    return this.appName;
  }

  setHeaderHeight(height: number): void {
    // set by the header component
    this.headerHeight = height;
  }

  getHeaderHeight(): number {
    return this.headerHeight;
  }

}
