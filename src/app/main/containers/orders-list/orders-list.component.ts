import { Component, OnInit } from '@angular/core';
import { ToastController, NavController, AlertController } from '@ionic/angular';
import {faCoffee,faCar,faMailBulk,faEnvelope,faUser,faUserAlt,faIdCard,faComments} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss'],
})
export class OrdersListComponent implements OnInit {
   faCoffee = faCoffee;
   faCar = faCar;
   faMailBulk = faMailBulk;
   faEnvelope = faEnvelope;
   faUser = faUser;
   faUserAlt = faUserAlt;
   faIdCard = faIdCard;
   faComments = faComments;
  constructor(public alertController: AlertController,public toastController: ToastController,public navCtrl: NavController) {
    sessionStorage.setItem('Enquiry Rejected' ,'1')
   }

  ngOnInit() {}
  async logoutMsg(){
   
    const alert = await this.alertController.create({
      header: 'Are you sure you want to logout?',
   
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          //  this.AddedToCart(DishName);
          }
        },
        {
          text: 'Yes',
          handler: (blah) => {
            console.log(blah);
         this.navCtrl.navigateRoot('/home')
          }
        },
       
      ]
    });

    await alert.present();
  }
}
