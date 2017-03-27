import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warningalert',
  template: `
    <div class="alert alert-warning" role="alert">
      <strong>Warning!</strong> {{ alertMessage }}.
    </div>
  `,
  styleUrls: ['./alert.component.css']
})
export class WarningalertComponent implements OnInit {

  alertMessage:String = "You successfully read this important alert message";

  constructor() { }

  ngOnInit() {
  }

}
