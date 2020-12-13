import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormControl, FormGroup, Validators,ValidatorFn,AbstractControl} from '@angular/forms';
import {RegexService} from '../../../shared/regex/regex.service';
import { Router, Event, NavigationEnd } from '@angular/router';
import { LoginService } from 'src/app/shared/admin/login.service';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent {
  Credentials:any;
  ApiCredentials:any;
 get name(){
   return this.registrationForm.get('name')
 }
 get lname(){
   return this.registrationForm.get('lname')
 }
get email(){
  return this.registrationForm.get('email');
}
get phone(){
  return this.registrationForm.get('phone');
}
get Otp(){
  return this.registrationForm.get('Otp')
}
public errorMessages = {
  name : [
    {
      type: 'required' , message: 'नाव आवश्यक आहे'  
    },
    {
      type:'maxlength' , message: 'नाव 100 वर्णांपेक्षा मोठे नाही'
    }
  ],
  lname:[
    {
    type: 'required',message: 'आडनाव आवश्यक आहे'
    },
    {
  type:'maxlength',message:'नाव 100 वर्णांपेक्षा मोठे नाही'
    }
],
  email : [
    {
      type:'pattern' , message: ' कृपया वैध ईमेल पत्ता प्रविष्ट करा'
    }
  ],
  phone : [
    {type:'required',message:'मोबाइल नंबर आवश्यक आहे'},
    {
      type:'pattern',message:'कृपया एक वैध मोबाइल नंबर प्रविष्ट करा'
    }
  ],
  Otp:[
    {type:'required', message:'ओटीपी आवश्यक आहे'},
    {
      type:'pattern', message: 'कृपया एक वैध ओटीपी प्रविष्ट करा '
    }
  ]
}

  registrationForm = this.formBuilder.group({
    name: ['',[Validators.required, Validators.maxLength(100)]],
    lname:['',[Validators.required,Validators.maxLength(100)]],
    email: ['',[Validators.pattern(this.regexService.Email)]],
    phone: ['',[Validators.required,Validators.pattern(this.regexService.Phone)]],
    Otp:['',[Validators.required,]]
  })
  constructor(private formBuilder:FormBuilder,private regexService: RegexService,private router: Router,
    private loginservice:LoginService,private toastCtrl: ToastController) {


      
     }

 submit(){
  console.log(this.registrationForm.value)
  let Reg = this.registrationForm.value;

  console.log(Reg.name.length)
  if (Reg.name.length === 0){
    console.log('In If');
    
    return this.registrationForm.get('name')
  }
  else if (Reg.lname.length === 0){
    console.log('In else If');
    return this.registrationForm.get('lname')
  }
  else if (Reg.phone.length === 0){
    console.log('In else If');
    
  }
  else if(Reg.Otp.length === 0){
    console.log('We are in else');
    this.Credentials ={
      "fname" : Reg.name,
      "lname": Reg.lname,
      "mobile" : Reg.phone,
      "email" : Reg.email
    }
    // this.loginservice.SignUp(this.Credentials).subscribe((data)=>{
        // console.log(data);
        // if(data['response']==1){
          // console.log(data);
          // sessionStorage.setItem('OTP',data['otp'])
          // this.ApiCredentials = data
          this.PresentToastLoginSuccessful()
        // }
        // else if (data['response']==0){
          // this.PresentToastInvalid()
        // }
        // else if (data['response']==2){
          //  this.PresentToastAlreadyExists()
        // }
    // })
// this.router.navigate(['/main/orders'])
    return this.registrationForm.get('phone')
    // return this.registrationForm.get('Otp')
  }
  // else if(Reg.Otp.length > 0) {
  //   console.log('We are in else');
    
   
  //        return this.registrationForm.get('Otp');
  // }
}
async PresentToastLoginSuccessful(){
  let toast = await this.toastCtrl.create({
    message: 'Sign Up Successful',
    duration: 3000,
    position: 'bottom'
  });


  toast.present();
  this.router.navigate([`/main/orders`])
}
async PresentToastInvalid(){
  let toast = await this.toastCtrl.create({
    message: 'Invalid Login Credentials',
    duration: 3000,
    position: 'bottom'
  });


  toast.present();
}
async PresentToastAlreadyExists(){
  let toast = await this.toastCtrl.create({
    message: 'User Already Exists',
    duration: 3000,
    position: 'bottom'
  });


  toast.present();
}
}
