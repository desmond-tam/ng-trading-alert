import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { IIndices } from '../../../models/IIndice';

@Component({
  selector: 'app-index-today',
  templateUrl: './index-today.component.html',
  styleUrls: ['./index-today.component.css'],
  imports:[CommonModule]
})
export class IndexTodayComponent implements OnInit {
  list:IIndices[] = [];
  constructor(private dataServices:DataService) { }

  ngOnInit() {
    this.dataServices.getIndicesData()
      .subscribe({
        next:((records:IIndices[]) => {
          this.list = records;
        })
      })
  }

}
