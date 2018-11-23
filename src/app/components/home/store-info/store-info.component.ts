import { Component, OnInit, Input } from '@angular/core';
import { Store } from 'src/app/models/stores.model';
import { CacheService } from 'src/app/services/cache.service';
import { AddStoreService } from 'src/app/services/add-store.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import * as $ from 'jquery';
import { StoreUtilsService } from 'src/app/services/store-utils.service';


@Component({
  selector: 'app-store-info',
  templateUrl: './store-info.component.html',
  styleUrls: ['./store-info.component.css', './../home.component.css']
})
export class StoreInfoComponent implements OnInit {
  @Input() stores: Store;
  selectedstor: Store;
  currentUser;
  name;
  price;
  des;

  editing = false;
  selectedTable;
  display;
  tables: any[] = [
    {
      'seats': '5', 'avail': 'No', 'people': 'No', 'position': 'Indoor',
      'name': [
        'Day  Meyers'
        ,
        'Aguirre  Ellis'
        ,
        'Cook  Tyson'
      ]
    },
    {
      'seats': '4', 'avail': 'Yes', 'people': 'No', 'position': 'Outdoor',
      'name': [
        'Douglas  Pace'
        ,
        'Mcleod  Mueller'
        ,
      ]
    },
    {
      'seats': '5', 'avail': 'No', 'people': 'No', 'position': 'Indoor',
      'name': [
        'Day  Meyers'
        ,
        'Aguirre  Ellis'
        ,
        'Cook  Tyson'
      ]
    }
  ];


  constructor(
    protected cache: CacheService,
    protected store: AddStoreService,
    protected router: Router,
    protected auth: AuthService,
    protected storeUtil: StoreUtilsService,

  ) {
    if (cache.selectedStore) {
      this.selectedstor = cache.selectedStore;
    } else {
      this.selectedstor = JSON.parse(localStorage.getItem('selectedStore'));
      // console.log('from localstorage ', this.selectedstor);
    }
    if (cache.currentUser) {
      this.currentUser = cache.currentUser;
    } else {
      this.currentUser = JSON.parse(localStorage.getItem('currentuser'));
    }


    // $(document).ready(function() {
    //     $(this).scrollTop(0);
    // });
  }

  ngOnInit() {
  }

  deleteStore(val) {
    if (val) {
      this.store.deleteStore(this.selectedstor.storeProfile.name);
      this.router.navigate(['/']);
    }
  }
  sendMenuItem() {
    this.storeUtil.saveMenu(this.selectedstor.storeProfile.name);
  }

}
