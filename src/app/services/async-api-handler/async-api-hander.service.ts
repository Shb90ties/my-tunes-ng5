//** Works with Promises meant for Async Await functions, used on ngOnInit for page components */
/*
    Example:
      constructor (private asyncHttp: AsyncApiHanderService) {}
      async function() {
        let res = null;
        await this.asyncHttp.get().then(response => res = response);
        console.log(res);
      }
*/

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

@Injectable()
export class AsyncApiHanderService {

    // mock api
  private url: string = '/assets/data';

  constructor(
    private http: HttpClient
  ) { }

  errorHandler(error: HttpErrorResponse) {
    return error.message || 'Server error...';
  }

  public get(): Promise<any> {
    let url =`https://api.myjson.com/bins/7t3cz`;
    return this.http.get(url).toPromise()
      .then( res => res as any )
      .catch(this.errorHandler);
  }

}
