import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

  // Services
import { ApiHandlerService } from '../../services/api-handler/api-handler.service';
import { AsyncApiHanderService } from '../../services/async-api-handler/async-api-hander.service';

  // Entities
import { Test, TestClass } from '../../entities/api/test';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private test: Test;
  private testClass: TestClass;
  public errorMSG: string = '';

  constructor(
    private titleService: Title,
    private http: ApiHandlerService,
    private asyncHttp: AsyncApiHanderService
  ) { }

  async ngOnInit() {
    let response: any = {}
    await this.asyncHttp.get()
      .then(res => response = res)
      .catch(err => console.error(err));
    console.log('res: ', response);


    this.http.getAsClass().subscribe(
      data => {
        this.testClass = data;
        console.log('this.test:  from API', this.testClass);
      },
      error => {
        this.errorMSG = error;
      });
  }
}
