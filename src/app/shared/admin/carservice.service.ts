import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
export interface Product {
  id:number;
  name:string;
  price: number;
  passenger:number;
}
@Injectable({
  providedIn: 'root'
})
export class CarserviceService {
   data: Product[] = [
     {id:0,name:'Vardan Hingmire',price:500,passenger:2},
     {id:1,name:'Datta Sir',price:450,passenger:1},
     {id:2,name:'Patil Sir', price:700,passenger:2},
    //  {id:3,name:'Nasik to Jejuri',price:1000,passenger:1}
   ];
   private car = [];
   private carItemCount = new BehaviorSubject(0);

  constructor() { }
  getProducts(){
    return this.data;
  }
  getcar(){
return this.car;
  }
  getCarItemCount(){
    return this.carItemCount;
  }
  addProduct(product){
   let added = false;
   for(let p of this.car){
     if(p.id === product.id){
       p.amount += 1;
       added = true;
       break;
     }
   }
   if(!added){
     this.car.push(product)
   }
   this.carItemCount.next(this.carItemCount.value + 1)
  }
  decreaseProduct(product){
for(let [index,p] of this.car.entries()){
  if (p.id === product.id){
    p.amount -= 1;
    if (p.amount == 0){
      this.car.splice(index,1);
    }
  }
}

this.carItemCount.next(this.carItemCount.value -1);
  }
  removeProduct(product){
for (let [index,p] of this.car.entries()){
  if(p.id === product.id){
    this.carItemCount.next(this.carItemCount.value - p.amount);
    this.car.splice(index,1);
  }
}
  }
}
