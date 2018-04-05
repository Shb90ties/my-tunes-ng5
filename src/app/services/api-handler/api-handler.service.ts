/** Api-Handler Uses Observables and return class objects, cannot be used for Async Await functions */

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import {plainToClass} from "class-transformer";

// Entities
import { Test, TestClass } from '../../entities/api/test';

@Injectable()
export class ApiHandlerService {
        // mock-url
  private url: string = "/assets/data";

  constructor(
    private http: HttpClient
  ) { }


  private errorHandler(error: HttpErrorResponse) {
    console.error(error.message || 'Server error...');
    return Observable.throw(error.message || 'Server error...');
  }

  get(): Observable<Test> {
    let url: string = `${this.url}/test.json`;
    return this.http.get<Test>(url)
            .map(res => res as Test)
            .catch(this.errorHandler);
  }

  getAsClass(): Observable<TestClass> {
    let url: string = `${this.url}/test.json`;
    return this.http.get<TestClass>(url)
            .map(res => plainToClass(TestClass, res as Object))
            .catch(this.errorHandler);
  }
  
}
