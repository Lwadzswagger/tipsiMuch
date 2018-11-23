import { Injectable } from '@angular/core';
import { Store } from '../models/stores.model';

@Injectable({
  providedIn: 'root'
})
export class CacheService {

  constructor() { }
  store: Store;

  currentUser;

  selectedStore;
}
