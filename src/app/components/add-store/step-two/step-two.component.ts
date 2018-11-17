import { Component, OnInit } from '@angular/core';
import { AddStoreService } from 'src/app/services/add-store.service';

@Component({
  selector: 'app-step-two',
  templateUrl: './step-two.component.html',
  styleUrls: ['./step-two.component.css', '../add-store.component.css']
})
export class StepTwoComponent implements OnInit {


  storeProfileCellNumber = "";
  contactName = ""
  contactPosition = ""
  // tradingHours  = "";
  capacity: 1
    seatsType: ''

  makeReservations ;
  // contactCellNumber = ""
 floor=[];
  floorSet = {
    capacity: 1,
    seatsType: ''
  }
  reviewsRatings = null;


  constructor(private addStore: AddStoreService, ) { }

  ngOnInit() {
  }

  done() {
    this.addStore.store.contact.position = this.contactPosition;
    this.addStore.store.storeProfile.cellNumber = this.storeProfileCellNumber;
    this.addStore.store.contact.name = this.contactName;
    console.log(this.addStore.store);
    

  }
  addSet() {
    this.floorSet.capacity= this.capacity
    this.floorSet.seatsType= this.seatsType
    console.log(this.floorSet);    
    this.floor.push(this.floorSet)
    this.capacity = 1,
    this.seatsType = ''
    console.log('after ', this.floor);
  }
  reservations(val){
    this.makeReservations = val;
  }

  add() {
    this.floorSet.capacity = ++this.floorSet.capacity;
  }
  minus() {
    this.floorSet.capacity = --this.floorSet.capacity;
  }
  
}
