import { Injectable } from '@angular/core';

@Injectable()
export class GlobalsService {
  private appName: String;

  constructor() { 
    this.appName = 'My Tunes';
  }

  public getAppName(): String {
    return this.appName;
  }

}
