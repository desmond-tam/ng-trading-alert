import { Component, OnInit } from '@angular/core';
import { IndexTodayComponent } from './index-today/index-today.component';
import { AlertTodayComponent } from "./alert-today/alert-today.component";

@Component({
  selector: 'app-body',
  templateUrl: './app-body.component.html',
  styleUrls: ['./app-body.component.css'],
  imports: [IndexTodayComponent, AlertTodayComponent]
})
export class AppBodyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
