import { Component } from '@angular/core';
import { AppHeaderComponent } from "./components/app-header/app-header.component";
import { AppSideBarComponent } from './components/app-side-bar/app-side-bar.component';
import { AppFooterComponent } from './components/app-footer/app-footer.component';
import { AppBodyComponent } from './components/app-body/app-body.component';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [AppHeaderComponent, AppHeaderComponent, AppSideBarComponent, AppFooterComponent, AppBodyComponent],
  providers:[ DataService ]
})
export class AppComponent {
  title = 'ng-trading-alert';
}
