import { Component, OnInit } from '@angular/core';
import { Alert, IAlert } from '../../../models/alert';
import { DataService } from '../../../services/data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-alert-today',
  templateUrl: './alert-today.component.html',
  styleUrls: ['./alert-today.component.css'],
  imports:[CommonModule]
})
export class AlertTodayComponent implements OnInit {
  list:IAlert[] = [];
  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.dataService.getAlerts()
      .subscribe({
        next:(records:IAlert[]) => {
          this.list = records.map(x => Object.assign(new Alert(),x));
        
        }
      })
  }

}
