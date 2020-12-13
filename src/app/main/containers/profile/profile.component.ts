import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import {Camera,CameraOptions,PictureSourceType} from '@ionic-native/camera/ngx';
import {ActionSheetController, ToastController,Platform, LoadingController} from '@ionic/angular';
import {File,FileEntry} from '@ionic-native/File/ngx';
import {HttpClient} from '@angular/common/http';
import {WebView} from '@ionic-native/ionic-webview/ngx';
import {Storage} from '@ionic/storage';
import {finalize} from 'rxjs/operators'
import { Router } from "@angular/router";
import {FileTransfer,FileUploadOptions,FileTransferObject} from '@ionic-native/file-transfer/ngx';
import {FileChooser} from '@ionic-native/file-chooser/ngx';
import {FilePath} from '@ionic-native/file-path/ngx';
const STORAGE_KEY = 'my_images';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  images = [];
  uploadText :any;
  downloadText:any;
  fileTransfer:FileTransferObject
  constructor( private router: Router,private camera:Camera,private http:HttpClient,
    private webview:WebView,private actionSheetController:ActionSheetController,
    private toastController:ToastController,private storage:Storage,private plt:Platform,private loadingController:LoadingController,
    private ref:ChangeDetectorRef,private transfer:FileTransfer,private file:File,private filePath:FilePath,
    private fileChooser : FileChooser,) { 

      this.uploadText = "";
      this.downloadText = "";
    }

  ngOnInit() {
      this.plt.ready().then(()=>{
        this.loadStoredImages();
      })

  }
  UPloadFiLeDrivingLicense(){
    this.fileChooser.open().then((uri)=>{
          this.filePath.resolveNativePath(uri).then((nativepath)=>{
                this.fileTransfer = this.transfer.create();
                let options : FileUploadOptions ={
                  fileKey: 'file',
                  fileName: 'name.jpg',
                  headers:{},
                  mimeType:'file/jpg'
                }
                this.uploadText = "uploading...";
                this.fileTransfer.upload(nativepath,'your endpoint api url',options).then((data)=>{
                  alert("Transfer Done = " + JSON.stringify(data));
                  this.uploadText = "";

                },(err)=>{
                  alert(JSON.stringify(err)); 
                })
          },(err)=>{
            alert(JSON.stringify(err))
          })
    },(err)=>{
      alert(JSON.stringify(err))
    })
  }
  UPloadFiLeAadhar(){
    this.fileChooser.open().then((uri)=>{
          this.filePath.resolveNativePath(uri).then((nativepath)=>{
                this.fileTransfer = this.transfer.create();
                let options : FileUploadOptions ={
                  fileKey: 'file',
                  fileName: 'name.jpg',
                  headers:{},
                  mimeType:'file/jpg'
                }
                this.uploadText = "uploading...";
                this.fileTransfer.upload(nativepath,'your endpoint api url',options).then((data)=>{
                  alert("Transfer Done = " + JSON.stringify(data));
                  this.uploadText = "";

                },(err)=>{
                  alert(JSON.stringify(err)); 
                })
          },(err)=>{
            alert(JSON.stringify(err))
          })
    },(err)=>{
      alert(JSON.stringify(err))
    })
  }

  loadStoredImages(){
    this.storage.get(STORAGE_KEY).then(images => {
      if (images){
        let arr = JSON.parse(images);
        this.images = [];
        for (let img of arr){
          let filePath = this.file.dataDirectory + img;
          let resPath = this.pathForImage(filePath);
          this.images.push({name:img,path:resPath,filePath:filePath});

        }
      }
    });
  }

  pathForImage(img){
    if (img === null){
      return '' ;

    }else {
      let converted = this.webview.convertFileSrc(img);
      return converted
    }
  }

async presentToast(text){
  const toast = await this.toastController.create({
    message: text,
    position: 'bottom',
    duration: 3000

  });
  toast.present();
}

async selectImage(){
  const actionSheet = await this.actionSheetController.create({
    header: "Select Image source",
    buttons: [{
      text: 'Load From Library',
      handler: ()=>{
        this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
      }
    },
    {
      text:'Use Camera',
      handler:()=>{
        this.takePicture(this.camera.PictureSourceType.CAMERA);
      }
    },
    {
      text: 'Cancel',
      role: 'cancel'
    }
 
  
  ]
  });
  await actionSheet.present();
}

takePicture(sourceType: PictureSourceType){
  var options: CameraOptions = {
    quality: 100 ,
    sourceType:sourceType,
    saveToPhotoAlbum:false,
    correctOrientation:true
  };
  this.camera.getPicture(options).then(imagePath=>{
    var currentName = imagePath.substr(imagePath.lastIndexOf('/')+ 1);
    var correctPath = imagePath.substr(0,imagePath.lastIndexOf('/')+1);
    this.copyFileToLocalDir(correctPath,currentName,this.createFileName())
  });

  
}

copyFileToLocalDir(namePath,currentName,newFileName){
  this.file.copyFile(namePath,currentName,this.file.dataDirectory,newFileName).then(_ =>{
    this.updateStoredImages(newFileName);
  },error =>{
    this.presentToast('Error While Storing File');

  });
  
} 
updateStoredImages(name){
  this.storage.get(STORAGE_KEY).then(images =>{
    let arr =  JSON.parse(images);
    if (!arr){
      let newImages = [name];
      this.storage.set(STORAGE_KEY,JSON.stringify(newImages));

    }
    else{
      arr.push(name);
      this.storage.set(STORAGE_KEY,JSON.stringify(arr))
    }
  })
  let filePath = this.file.dataDirectory + name;
  let resPath = this.pathForImage(filePath)
  let newEntry = {
    name: name,
    path: resPath,
    filePath:filePath
  };
this.images = [newEntry, ...this.images];
this.ref.detectChanges();  // Trigger change detection Cycle
}


createFileName(){
  var d = new Date(),
  n = d.getTime(),
  newFileName = n + ".jpg";
  return newFileName;
}

navigatetobankDetails(){
  this.router.navigate(['/main/bankdetails'])
 }

deleteImage(imgEntry,position){
  this.images.splice(position,1);
  this.storage.get(STORAGE_KEY).then(images=>{
    let arr = JSON.parse(images);
    let filtered = arr.filter(name => name != imgEntry.name);
    this.storage.set(STORAGE_KEY,JSON.stringify(filtered));

    var correctPath = imgEntry.filePath.substr(0 ,imgEntry.filePath.lastIndexOf('')+1);

    this.file.removeFile(correctPath,imgEntry.name).then(res =>{
      this.presentToast('File Removed');
    })


  })
}
startUpload(imgEntry){
  this.file.resolveLocalFilesystemUrl(imgEntry.filePath).then(entry =>{
    (<FileEntry>entry).file(file => this.readFile(file))
  })
  .catch(err =>{
    this.presentToast('Error while reading file')
  })
}
readFile(file:any){
  const reader =  new FileReader();
  reader.onloadend =()=>{
    const formData = new FormData();
    const imgBlob = new Blob([reader.result],{
      type:file.type
    });
    formData.append('file',imgBlob,file.name);
    this.uploadImageData(formData)
  };
  reader.readAsArrayBuffer(file);

}


async uploadImageData(formData:FormData){
  const loading = await this.loadingController.create({
    spinner: null,
    duration: 5000,
    message: 'Click the backdrop to dismiss early...',
    translucent: true,
    cssClass: 'custom-class custom-loading',
    backdropDismiss: true
  });
  await loading.present();

  // const { role, data } = await loading.onDidDismiss();
  // console.log('Loading dismissed with role:', role);
this.http.post("http://localhost:8888/upload.php",formData).pipe(
  finalize(()=>{
    loading.dismiss();

  })
).subscribe(res =>{
  if (res['success']){
    this.presentToast('File Upload Complete')
  }
  else {
    this.presentToast('File Upload Failed')
  }
})
}
navigatetosupport(){
  
}
}


