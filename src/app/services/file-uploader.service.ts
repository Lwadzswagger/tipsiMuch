import { Injectable } from '@angular/core';
import { UploadFiles } from 'src/app/models/uploadFiles.model'
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase'
// import { AuthService } from './auth-service.service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FileUploaderService {

  constructor(
    private af: AngularFireModule, 
     ) { }

  private  uploads: Observable<UploadFiles[]>;
  private uploadTask: firebase.storage.UploadTask;

  pushUpload(upload: UploadFiles, basepath: string, storeName:string) {

    const storageRef = firebase.storage().ref();
    const uploadTask = storageRef.child(`${basepath}/${storeName}/${upload.file.name}`).put(upload.file);

    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot: any) => {
        //upload in progress
        upload.progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      },
      (error) => {
        //upload failed
        console.error('upload just failed', error);
      },
      () => {
        //upload success
         if (uploadTask.snapshot.ref.getDownloadURL()){
         uploadTask.snapshot.ref.getDownloadURL().then((url)=>{
      console.log('got a link here people', url);
      
        });
        upload.name = upload.file.name;

        // this.saveFileData(upload, `${basepath}/${storeName}`);
        console.log('download url for pic ',upload.url);
        console.log('file name',upload.name);
        
        console.log('File uploaded');
        return;
      } else {
          console.error('No download URL!');
        }
      }, )
  }
 
  
}
