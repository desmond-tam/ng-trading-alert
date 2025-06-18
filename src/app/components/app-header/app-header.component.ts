import { Component, OnInit } from '@angular/core';
import { NotificationComponent } from './notification/notification.component';
import { MessageComponent } from './message/message.component';
import { ProfileComponent } from './profile/profile.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css'],
  imports: [CommonModule, NotificationComponent , MessageComponent, ProfileComponent]
})
export class AppHeaderComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  public toggle() {
    document.body.classList.toggle("toggle-sidebar");
  }

}
