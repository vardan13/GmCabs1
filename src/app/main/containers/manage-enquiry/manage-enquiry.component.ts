import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, PopoverController } from '@ionic/angular';
import {ModalviewComponent} from '../../components/modalview/modalview.component'
import { PopoverComponent } from '../../components/popover/popover.component';
import { ModalService } from '../../modal-service/modal.service';
@Component({
  selector: 'app-manage-enquiry',
  templateUrl: './manage-enquiry.component.html',
  styleUrls: ['./manage-enquiry.component.scss'],
})
export class ManageEnquiryComponent  {
value:boolean =true;
  enquiries: any;
  constructor(public modalController: ModalController,private modalService:ModalService, public popovercontroller:PopoverController,private Navcontroller:NavController) {
    
    console.log(sessionStorage.getItem('Enquiry Rejected'));
    

     
       sessionStorage.getItem('Enquiry Rejected') 
      
      
      if (sessionStorage.getItem('Enquiry Rejected') == '1'){
        console.log('in If');
        
        
           this.value = true
      }
      else if(sessionStorage.getItem('Enquiry Rejected') === '0' ) {
        console.log('in Else if');
        
        this.value = false
      }
      else if (sessionStorage.getItem('Enquiry Rejected') === null){
        this.value = true
      }
      else if (sessionStorage.getItem('Enquiry Rejected') === undefined){
        this.value = true
      }
   }

  
async openPopover(ev:Event) {
  //  this.enquiries = {name:'shubham',age:21}
  //  this.modalService.open('addForm');
    const popover = await this.popovercontroller.create({
      component :PopoverComponent,
      componentProps:{
        custom_id :this.value
      },
      
    });
    popover.present();
  }
  ionViewWillEnter(){
    console.log(sessionStorage.getItem('Enquiry Rejected'));
    

     
    sessionStorage.getItem('Enquiry Rejected') 
   
   
   if (sessionStorage.getItem('Enquiry Rejected') == '1'){
     console.log('in If');
     
     
        this.value = true
   }
   else if(sessionStorage.getItem('Enquiry Rejected') === '0' ) {
     console.log('in Else if');
     
     this.value = false
   }
   else if (sessionStorage.getItem('Enquiry Rejected') === null){
     this.value = true
   }
   else if (sessionStorage.getItem('Enquiry Rejected') === undefined){
     this.value = true
   }
    
  }

  submitEnquiry(event){
    console.log(event)
  }
}
