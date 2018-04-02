import { Injectable } from '@angular/core';

@Injectable()
export class GlobalVariablesService {
  private appName: String;

  constructor() { 
    this.appName = 'My Tunes';
  }

  public getAppName(): String {
    return this.appName;
  }

}
