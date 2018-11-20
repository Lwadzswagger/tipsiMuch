import { Component, OnInit } from '@angular/core';
import { AddStoreService } from 'src/app/services/add-store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-step-two',
  templateUrl: './step-two.component.html',
  styleUrls: ['./step-two.component.css', '../add-store.component.css']
})
export class StepTwoComponent implements OnInit {

  adder = true;
  storeProfileCellNumber = "";
  contactName = ""
  contactPosition = ""
  makeReservations ;
  
  floorSet = {
    capacity:1,
    seatsType:''
  }
  reviewsRatings = null;


  constructor(
    private addStore: AddStoreService,
    private router: Router,
     ) { }

  ngOnInit() {
  }

  done() {
    this.addStore.store.contact.position = this.contactPosition;
    this.addStore.store.storeProfile.cellNumber = this.storeProfileCellNumber;
    this.addStore.store.contact.name = this.contactName;
    this.addStore.store.makeReservations = this.makeReservations;

    console.log(this.addStore.store);
    this.addStore.registerStore(this.addStore.store);
    this.router.navigate(['/'])
    }
  addSet() {       
    this.addStore.store.floorSetting.push(this.floorSet)
    this.adder = false;
  }
  reservations(val){
    console.log(val);    
    this.makeReservations = val;
  }

  add() {
    this.floorSet.capacity = ++this.floorSet.capacity;
  }
  minus() {
    this.floorSet.capacity = --this.floorSet.capacity;
  }
  back(){
  this.addStore.step = 1;
  
  }
  
}
