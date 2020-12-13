import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { CarserviceService } from 'src/app/shared/admin/carservice.service';
import { CarmodelComponent } from '../../components/carmodel/carmodel.component';

@Component({
  selector: 'app-add-passengers',
  templateUrl: './add-passengers.component.html',
  styleUrls: ['./add-passengers.component.scss'],
})
export class AddPassengersComponent implements OnInit {
  segment = 'home';
  name = 'There';
  action = "add new";
  public trip: any;
 car = [];
 products = [];
 carItemCount : BehaviorSubject<number>
  product = {
    id:       undefined,
    name:     undefined, 
    price:    undefined,
    currency: "OMR"
  }
  constructor(private carservice:CarserviceService,private modalCtrl:ModalController) { }

  ngOnInit() {

    this.products = this.carservice.getProducts();
    this.car = this.carservice.getcar();
    this.carItemCount = this.carservice.getCarItemCount();
  }
addToCar(product){
this.carservice.addProduct(product);

}
async openCar(){
let modal = await this.modalCtrl.create({
  component: CarmodelComponent,
  cssClass:'car-modal'
});
modal.present()
}
}

