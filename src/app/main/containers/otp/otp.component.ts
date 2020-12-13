import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {FormBuilder,FormControl, FormGroup, Validators,ValidatorFn,AbstractControl} from '@angular/forms';
import { RegexService } from 'src/app/shared/regex/regex.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss'],
})
export class OtpComponent implements OnInit {
  OTP : any;
  get Otp(){
    return this.registrationForm.get('Otp')
  }
  public errorMessages = {
    Otp:[
      {type:'required', message:'ओटीपी आवश्यक आहे'},
      
    ]
  }
  registrationForm = this.formBuilder.group({
    Otp: ['',[Validators.required]],
  })
  constructor(private formBuilder:FormBuilder,private regexService: RegexService,
    public router:Router,private toastCtrl: ToastController) { 
   this.OTP = sessionStorage.getItem('OTP')
    console.log(this.OTP)
    
  }

  ngOnInit() {
  

  }
  submit(){
    let otp = this.registrationForm.get('Otp')
    console.log(otp.value);
    
    if (otp.value == this.OTP){
      this.PresentToastLoginSuccessful()
    }
    else if(otp.value !== this.OTP){
  this.PresentInvalid()
    }
  }
  async PresentInvalid(){
    let toast = await this.toastCtrl.create({
      message: 'Invalid Login Credentials',
      duration: 3000,
      position: 'bottom'
    });
  
  
    toast.present();
  }
  async PresentToastLoginSuccessful(){
    let toast = await this.toastCtrl.create({
      message: 'Login Successful',
      duration: 3000,
      position: 'bottom'
    });
  
  
    toast.present();
    this.router.navigate(['/main/orders'])
  }
}
