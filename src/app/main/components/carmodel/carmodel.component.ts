import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {CarserviceService, Product} from '../../../shared/admin/carservice.service'
@Component({
  selector: 'app-carmodel',
  templateUrl: './carmodel.component.html',
  styleUrls: ['./carmodel.component.scss'],
})
export class CarmodelComponent implements OnInit {
  car: Product[]=[];
  constructor(private carservice:CarserviceService,private modalCtrl:ModalController) { }

  ngOnInit() {
    this.car = this.carservice.getcar();
  }
  decreaseCarItem(product){
   this.carservice.decreaseProduct(product);
  }
  increaseCarItem(product){
    this.carservice.addProduct(product);
  }
  removeCarItem(product){
   this.carservice.removeProduct(product);  
  }
  getTotal(){
    return this.car.reduce((i,j)=> i + j.price * j.passenger,0)
  }
  close(){
    this.modalCtrl.dismiss();
  }
}
