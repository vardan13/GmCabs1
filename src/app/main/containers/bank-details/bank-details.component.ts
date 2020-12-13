import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-bank-details',
  templateUrl: './bank-details.component.html',
  styleUrls: ['./bank-details.component.scss'],
})
export class BankDetailsComponent implements OnInit {
   data:any[]=[];
  constructor(private router: Router) { 
    this.data = [{id:101,name:"PhonePay"},
    {id:102,name:"GooglePay"},
    {id:103,name:"BhimPay"},
    {id:104,name:"Paypal"},
    {id:105,name:"AmazonPay"}];


  }

  ngOnInit() {
    

  }
  OnChange(event){
       alert("you have selected id =" +event.target.value);
  }
  navigatetoprofile(){
    this.router.navigate(['/main/profile'])
  }
}
