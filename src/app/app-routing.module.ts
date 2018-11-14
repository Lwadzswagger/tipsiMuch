import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AddStoreComponent } from './components/add-store/add-store.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'addStore', component: AddStoreComponent },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
