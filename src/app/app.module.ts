import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { library } from '@fortawesome/fontawesome-svg-core';
import {faCoffee,faCar,faMailBulk,faEnvelope,faUser, faUserAlt,faIdCard,faComments} from '@fortawesome/free-solid-svg-icons';
import {File} from '@ionic-native/file/ngx';
import {FileTransfer} from '@ionic-native/file-transfer/ngx';
import {FileChooser} from '@ionic-native/file-chooser/ngx';
import {FilePath} from '@ionic-native/file-path/ngx';
import {IonicStorageModule} from '@ionic/storage';
// import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
// import { Geolocation} from '@ionic-native/geolocation';
library.add(faCoffee,faCar,faEnvelope,faMailBulk,faUserAlt,faUser,faIdCard,faComments);
@NgModule({
  declarations: [AppComponent,],
  entryComponents: [],
imports: [BrowserModule, IonicModule.forRoot(),HttpClientModule, AppRoutingModule,FontAwesomeModule,IonicStorageModule.forRoot()],

  providers: [
    StatusBar,
    SplashScreen,File,FileTransfer,FileChooser,FilePath,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    
      
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}