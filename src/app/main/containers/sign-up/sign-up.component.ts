import { Component, OnInit } from '@angular/core';
// import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { FormControl, FormGroup, Validators,ValidatorFn,AbstractControl } from '@angular/forms';
import {  ActivatedRoute, Params,Router} from "@angular/router";
import { LoadingController, ToastController } from '@ionic/angular';
// import { Push, PushObject, PushOptions } from '@ionic-native/push';
import {LoginService} from '../../../shared/admin/login.service'
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  user: FormGroup;
  mobileNumber:any;
  constructor(public loadingCtrl:LoadingController,
    private toastCtrl: ToastController,public router:Router,
    private loginservice:LoginService) { }

  ngOnInit() {
// 
this.user = new FormGroup({
  mob: new FormControl('', [Validators.required, Validators.minLength(10),Validators.pattern('[0-9]{10}')  ]),
  otp: new FormControl('',[Validators.required,]),
  // email: new FormControl('', [Validators.required,Validators.email]),
  // mob: new FormControl('', [Validators.required, Validators.minLength(10),Validators.maxLength(10)])
  
  });
  this.user.get('mob').hasError('minlength')
  this.user.get('mob').hasError('maxlength')
  this.user.get('mob').hasError('required')
  // name: new FormControl('', [Validators.required, Validators.minLength(4)])
  // this.user.get('otp').hasError('required')
  // this.user.get('pass').hasError('minlength')
  
  let loader = this.loadingCtrl.create({
    spinner:'crescent',
    
    duration:300

  }).then(loader=> loader.present());

  }
  submit(){
    let mobile =this.user.get('mob').value
    // this.loginservice.login(mobile).subscribe((data)=>{
      // console.log(data);
      // if (data['response']==1){
        // let Otp = data['otp']
        // sessionStorage.setItem('OTP',Otp)
        this.PresentToastLoginSuccessful()
      // }
      // else if (data['response']==0){
        // this.PresentToastInvalid()
      // }
    // })
  }
  async PresentToastLoginSuccessful(){
    let toast = await this.toastCtrl.create({
      message: 'Login Successful',
      duration: 3000,
      position: 'bottom'
    });
  
  
    toast.present();
    this.router.navigate(['/main/orders',])
  }
  async PresentToastInvalid(){
    let toast = await this.toastCtrl.create({
      message: 'Invalid Login Credentials',
      duration: 3000,
      position: 'bottom'
    });
  
  
    toast.present();
  }
}
