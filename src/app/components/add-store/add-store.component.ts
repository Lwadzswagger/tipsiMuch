import { Component, OnInit } from '@angular/core';
import { AddStoreService } from 'src/app/services/add-store.service';

@Component({
  selector: 'app-add-store',
  templateUrl: './add-store.component.html',
  styleUrls: ['./add-store.component.css']
})
export class AddStoreComponent implements OnInit {

  constructor(
   protected addstore:AddStoreService
     ) {}

  ngOnInit() {
    
  }








// addStore(){
//     this.newStore.contact.name = ""
//     this.newStore.contact.position = ""
//     this.newStore.contact.cellNumber = ""
//     this.newStore.floorSetting.capacity = "";
//     this.newStore.floorSetting.seatsType = "";
//     this.newStore.location = "";
//     this.newStore.makeReservations = false;
//     this.newStore.storeProfile.name = "";
//     this.newStore.storeProfile.cellNumber = "";
//     this.newStore.storeProfile.avatarUrl = 'https://c1.staticflickr.com/8/7459/11536816066_d1acaf5579_b.jpg';
//     this.newStore.tradingHours  = "";
//     this.newStore.establishmentType  = "";
//     this.newStore.slogan  = "";
//     this.newStore.reviewsRatings  = null;
// }

}
