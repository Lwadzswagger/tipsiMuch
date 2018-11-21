import { Component, OnInit, Input } from '@angular/core';
import { AddStoreService } from 'src/app/services/add-store.service';
import { Store } from 'src/app/models/stores.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { CacheService } from 'src/app/services/cache.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data: any


  constructor(
    protected store: AddStoreService,
    protected cache: CacheService,
    protected route: Router
    ) {

  }

  ngOnInit() {
    this.store.getStores().subscribe(res => {
      this.data = res
      localStorage.setItem('stores', this.data);
    })
  }

viewstore(store){
this.cache.selectedStore = store
localStorage.setItem('selectedStore', JSON.stringify(store))
  this.route.navigate(['store-Info'])
}
}
