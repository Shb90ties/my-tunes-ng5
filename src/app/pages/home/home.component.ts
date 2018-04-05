import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

  // Services
import { ApiHandlerPromisesService } from '../../services/api-handler/api-handler-promises.service';
import { ApiHandlerObservablesService } from '../../services/api-handler/api-handler-observables.service';

  // Entities
import { Test } from '../../entities/api/test';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private test: Test;
  private errorMSG: string = '';

  constructor(
    private titleService: Title,
    private httpPromise: ApiHandlerPromisesService,
    private httpObservable: ApiHandlerObservablesService
  ) { }

  async ngOnInit() {
    let response: any = {}
    await this.httpPromise.get()
    .then(res => response = res);
    console.log('res: ', response);


    this.httpObservable.get().subscribe(
      data => {
        this.test = data;
        console.log('this.test:  from API', this.test);
      },
      error => {
        this.errorMSG = error;
      });
  }
}
