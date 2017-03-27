import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  hideContent: boolean;
  clickLogs: string[] = [];

  onToggleClick($event) {
    let clickLog = 'Clicked ' + new Date();
    this.hideContent = !this.hideContent;
    this.clickLogs.push(clickLog);
  }
}
