import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

@Injectable()
export class ApiHandlerPromisesService {

    // mock api
  private url: string = '/assets/data';

  constructor(
    private http: HttpClient
  ) { }

  errorHandler(error: HttpErrorResponse) {
    return error.message || 'Server error...';
  }

  public get(): Promise<any> {
    let url =`${this.url}/test.json`;
    return this.http.get(url).toPromise()
      .then( res => res as any )
      .catch(this.errorHandler);
  }

}
