import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {

  @Input() enquiryData;
  @Output() formSubmitted = new EventEmitter();
  constructor() { }

  ngOnInit() {
    console.log(this.enquiryData)
  }

  submitPassword(){
    this.formSubmitted.emit({name:'vardan', age:24})
  }
}
