import { Component, OnInit } from '@angular/core';
import { AddStoreService } from 'src/app/services/add-store.service';

@Component({
  selector: 'app-step-two',
  templateUrl: './step-two.component.html',
  styleUrls: ['./step-two.component.css']
})
export class StepTwoComponent implements OnInit {

  
storeProfileCellNumber = "";
contactName = ""
contactPosition = ""
tradingHours  = "";

makeReservations = false;
  contactCellNumber = ""
  floorSettingCapacity = "";
  floorSettingSeatsType = "";
  reviewsRatings  = null;

   
  constructor( private addStore:AddStoreService,) { }

  ngOnInit() {
  }

  next(){
    this.addStore.store.contact.cellNumber = this.storeProfileCellNumber;
    this.addStore.store.contact.position = this.contactPosition;
    this.addStore.store.contact.name = this.contactPosition;
    this.addStore.store.tradingHours = this.tradingHours;
  }
  back(){
    this.addStore.step--;
  }
}
