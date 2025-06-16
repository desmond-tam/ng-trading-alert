import { Component, OnInit } from '@angular/core';
import { IndexTodayComponent } from './index-today/index-today.component';

@Component({
  selector: 'app-body',
  templateUrl: './app-body.component.html',
  styleUrls: ['./app-body.component.css'],
  imports:[IndexTodayComponent]
})
export class AppBodyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
