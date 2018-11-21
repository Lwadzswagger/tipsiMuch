import { Component, OnInit, Input } from '@angular/core';
import { Store } from 'src/app/models/stores.model';
import { CacheService } from 'src/app/services/cache.service';

@Component({
  selector: 'app-store-info',
  templateUrl: './store-info.component.html',
  styleUrls: ['./store-info.component.css']
})
export class StoreInfoComponent implements OnInit {
  @Input() stores:Store; 
selectedstor
  constructor(
    protected cache: CacheService
  ) {
    if(cache.selectedStore){
    this.selectedstor = cache.selectedStore }else{
      this.selectedstor  = JSON.parse(localStorage.getItem('selectedStore'));
      console.log('from localstorage ', this.selectedstor);
      
    }
  }

  ngOnInit() {
  }


}
