// core services
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardMenuComponent } from './containers/dashboard-menu/dashboard-menu.component';
import { CartComponent } from './containers/cart/cart.component';
import { OrdersListComponent } from './containers/orders-list/orders-list.component';
import { SignUpComponent } from './containers/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './containers/forgot-password/forgot-password.component';
import { InfoComponent } from './containers/info/info.component';
import {ProfileComponent} from './containers/profile/profile.component';
import {AddVehiclesComponent} from './containers/add-vehicles/add-vehicles.component';
import {BankDetailsComponent} from './containers/bank-details/bank-details.component';
import {ManageEnquiryComponent} from './containers/manage-enquiry/manage-enquiry.component';
import {SupportComponent} from './containers/support/support.component';
import {DriverMapComponent} from './containers/driver-map/driver-map.component';
import {AddPassengersComponent} from './containers/add-passengers/add-passengers.component'
import { OtpComponent } from './containers/otp/otp.component';
// main components

// import {SubjectSyllabusComponent} from './containers/syllabus/subject-syllabus/subject-syllabus.component'
const routes: Routes = [
  { path: '', redirectTo: 'sign_up', pathMatch: 'full' },
 {path:'dashboard-menu',component:DashboardMenuComponent},
 {path:'cart',component:CartComponent},
 {path:'orders',component:OrdersListComponent},
 {path:'sign_up',component:SignUpComponent},
 {path:'Forgot',component:ForgotPasswordComponent},
 {path:'info',component:InfoComponent},
 {path:'profile',component:ProfileComponent},
 {path:'AddVehicles', component:AddVehiclesComponent},
 {path:'bankdetails',component:BankDetailsComponent},
 {path:'ManageEnquiry',component:ManageEnquiryComponent},
 {path:'support',component:SupportComponent},
 {path:'driverMap', component:DriverMapComponent},
 {path:'AddPassenger',component:AddPassengersComponent},
 {path:'Otp',component:OtpComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule { }