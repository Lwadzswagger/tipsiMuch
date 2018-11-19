import { Component, OnInit } from '@angular/core';
import { Store } from 'src/app/models/stores.model';
import { AddStoreService } from 'src/app/services/add-store.service';
import { FileUploaderService } from 'src/app/services/file-uploader.service';
import { UploadFiles } from 'src/app/models/uploadFiles.model';

@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styleUrls: ['./step-one.component.css', '../add-store.component.css']
})
export class StepOneComponent implements OnInit {


  newStore: Store
  storePicture: any;

  storePicUrl;
  storeProfileName = "";
  slogan = "";
  location = "";
  establishmentType = "";



  constructor(
    private addStore: AddStoreService,
    private uploader: FileUploaderService
  ) { }

  ngOnInit() {
    //   this.mapLoader.load().then(() => {
    //     let autocomplete = new google.maps.places.Autocomplete(
    //       this.addressElementRef.nativeElement, {
    //         types: ["address"],
    //         componentRestrictions: { 'country': 'za' }
    //       }
    //     );
    //     autocomplete.addListener("place_changed", () => {
    //       this.ngZone.run(() => {
    //         let place: google.maps.places.PlaceResult=autocomplete.getPlace();
    //         if (place.geometry === undefined || place.geometry === null) {
    //           return;
  }


  profileDetect(event: any) {
    const file = (event.target as HTMLInputElement).files
    if (file && file.length === 1) {
      this.storePicture = new UploadFiles(file.item(0));
      this.filePreview(event, 'store-pics');
      // push profile
      if (this.storeProfileName) {
        this.uploader.pushUpload(this.storePicture, 'store-pics', this.storeProfileName);
      }

    } else {
      console.error('No store photo found!');
    }

  }

  filePreview(event: any, fileType: string) {
    var reader = new FileReader();
    console.log('filetype', fileType)

    reader.onload = (event: any) => {
      switch (fileType) {
        case "store-pics": this.storePicUrl = event.target.result;
          break;
        default:
          break;
      }

    }

    reader.readAsDataURL(event.target.files[0]);
  }

  stepOne() {
    this.addStore.store.storeProfile.name = this.storeProfileName;
    this.addStore.store.slogan = this.slogan;
    this.addStore.store.location = this.location;
    this.addStore.store.storeOwner = this.location;
    this.addStore.store.establishmentType = this.establishmentType;
    this.addStore.step++
  }

}
