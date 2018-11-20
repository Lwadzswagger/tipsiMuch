import { Component, OnInit } from '@angular/core';
import { AddStoreService } from './services/add-store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {

  constructor(
    public store:AddStoreService
  ){

  }

  ngOnInit() {
this.store.getData()
// console.log(`method sholud have exec already1`);

  }
  // title = 'tipsiMuch';
}
