import { BrowserModule } from '@angular/platform-browser';
import { FormsModule  } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule} from 'angularfire2/database';
import { AngularFireAuthModule} from 'angularfire2/auth'
import { AppRoutingModule } from './app-routing.module';
import { AngularFirestore } from 'angularfire2/firestore';


import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment.prod';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { AddStoreService } from './services/add-store.service';
import { AuthService } from './services/auth.service';
import { AddStoreComponent } from './components/add-store/add-store.component';
import { StepOneComponent } from './components/add-store/step-one/step-one.component';
import { StepTwoComponent } from './components/add-store/step-two/step-two.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { StoreInfoComponent } from './components/home/store-info/store-info.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    AddStoreComponent,
    StepOneComponent,
    StepTwoComponent,
    SignInComponent,
    StoreInfoComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ 
    AddStoreService,
    AuthService,
    AngularFirestore
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
