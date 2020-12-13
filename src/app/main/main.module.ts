
import { NgModule } from '@angular/core';
import { DashboardMenuComponent } from './containers/dashboard-menu/dashboard-menu.component';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainRoutingModule } from './main-routing.module';
import { CartComponent } from './containers/cart/cart.component';
import { OrdersListComponent } from './containers/orders-list/orders-list.component';
import { SignUpComponent } from './containers/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './containers/forgot-password/forgot-password.component';
import { InfoComponent } from './containers/info/info.component';
import {IonicStorageModule} from '@ionic/storage';
// import {HttpClientModule} from '@angular/common/http';
import {Camera } from '@ionic-native/Camera/ngx';
import {WebView} from '@ionic-native/ionic-webview/ngx';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {File} from '@ionic-native/file/ngx';
import {FileTransfer} from '@ionic-native/file-transfer/ngx';
import {FileChooser} from '@ionic-native/file-chooser/ngx';
import {FilePath} from '@ionic-native/file-path/ngx';
import {AddVehiclesComponent} from './containers/add-vehicles/add-vehicles.component';
import {BankDetailsComponent} from './containers/bank-details/bank-details.component';
import {ManageEnquiryComponent} from './containers/manage-enquiry/manage-enquiry.component';
import {SupportComponent} from './containers/support/support.component';
import {DriverMapComponent} from './containers/driver-map/driver-map.component';
import {ProfileComponent} from './containers/profile/profile.component';
import { AddPassengersComponent } from './containers/add-passengers/add-passengers.component';
import { ModalComponent } from './modal/modal.component';
import { ModalService } from './modal-service/modal.service';
import { PopoverComponent } from './components/popover/popover.component';
import { OtpComponent } from './containers/otp/otp.component';
// import { HttpClientModule } from '@angular/common/http';
// import { HttpModule } from '@angular/http';
// import {LoginService} from './shared/Api/login.service'
@NgModule({
  imports: [
    IonicModule,
    CommonModule,FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule, 
    MainRoutingModule ,IonicStorageModule.forRoot(),
  ],
  declarations: [
    DashboardMenuComponent,CartComponent,
    OrdersListComponent,SignUpComponent,
    ForgotPasswordComponent,InfoComponent,
    AddPassengersComponent,
    AddVehiclesComponent,OtpComponent,
    BankDetailsComponent,
    ManageEnquiryComponent,
    PopoverComponent,
    SupportComponent,DriverMapComponent,ProfileComponent,ModalComponent
  ],
  
  entryComponents:[],
  providers: [
    Camera,File,WebView, ModalService,
  ],
})
export class MainModule { }
