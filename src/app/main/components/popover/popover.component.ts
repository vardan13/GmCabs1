import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {

  constructor(public navcontroller:NavController,public router:Router,public popovercontroller:PopoverController) {
    sessionStorage.removeItem('Enquiry Rejected')
  sessionStorage.setItem('Enquiry Rejected','0')
  }

  ngOnInit() {}
  changeView(){
  // console.log(event);
  sessionStorage.setItem('Enquiry Rejected','0')
  this.popovercontroller.dismiss();
  window.location.reload();

  }
  navigate2res(){
    this.popovercontroller.dismiss();
     this.router.navigate(['/main/AddPassenger'])
  }
}
