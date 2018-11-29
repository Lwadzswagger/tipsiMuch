import { BrowserModule } from '@angular/platform-browser';
import { FormsModule  } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule} from 'angularfire2/database';
import { AngularFireAuthModule} from 'angularfire2/auth';
import { AppRoutingModule } from './app-routing.module';
import { AngularFirestore } from 'angularfire2/firestore';
import { AgmCoreModule } from '@agm/core';
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
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { GooglemapsComponent } from './components/googlemaps/googlemaps.component';
import { BannerComponent } from './components/ads/banner.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    AddStoreComponent,
    StepOneComponent,
    StepTwoComponent,
    BannerComponent,
    SignInComponent,
    StoreInfoComponent,
    UserProfileComponent,
    GooglemapsComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AgmCoreModule.forRoot({
      // mindingmybiz
      // apiKey: 'AIzaSyAu4jOsrSNvK-zWKatp0i_GTjoLhrFevr4'
    }),
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
