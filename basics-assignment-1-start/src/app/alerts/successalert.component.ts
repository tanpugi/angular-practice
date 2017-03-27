import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-successalert',
  template: `
    <div class="alert alert-success" role="alert">
      <strong>Success!</strong> {{ alertMessage }}.
    </div>
  `,
  styleUrls: ['./alert.component.css']
})
export class SuccessalertComponent implements OnInit {

  alertMessage:String = "You successfully read this important success message.";

  constructor() { }

  ngOnInit() {
  }

}
