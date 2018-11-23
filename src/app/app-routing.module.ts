import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AddStoreComponent } from './components/add-store/add-store.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { AuthGuardService } from './services/auth-guard.service';
import { StoreInfoComponent } from './components/home/store-info/store-info.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

const routes: Routes = [
  {
    path: '',    redirectTo: 'stores',   pathMatch: 'full'
  },
    { path: 'stores', component: HomeComponent },
    { path: 'sign-in', component: SignInComponent },
    { path: 'store-Info', component: StoreInfoComponent  , canActivate: [AuthGuardService]},
    { path: 'user-Info', component: UserProfileComponent, canActivate: [AuthGuardService] },
    { path: 'addStore', component: AddStoreComponent,  canActivate: [AuthGuardService] },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
