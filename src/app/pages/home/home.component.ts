import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { GlobalsService } from '../../services/globals/globals.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private titleService: Title,
    private globals: GlobalsService
  ) { }

  ngOnInit() { 
    this.titleService.setTitle(this.globals.getAppName() + ' - Home');
  }
}
