import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

// interface
import { Test } from '../../entities/api/test';

@Injectable()
export class ApiHandlerObservablesService {

      // mock-url
  private url: string = "/assets/data";

  constructor(
    private http: HttpClient
  ) { }

  errorHandler(error: HttpErrorResponse) {
    return Observable.throw(error.message || 'Server error...');
  }

  get(): Observable<Test> {
    let url: string = `${this.url}/'tes44t.json`;
    return this.http.get<Test>(url)
            .catch(this.errorHandler);
  }

}
