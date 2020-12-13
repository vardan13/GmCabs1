import { Component, ViewChildren, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { LoadingController, NavController, Platform, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  {



  constructor(
    private router: Router, public loadingCtrl: LoadingController, public navCtrl: NavController 

  ) {
     


  }
  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    setTimeout(() => {
      this.router.navigate(['/main'])
    }, 2000);
    
  }
  
 }
