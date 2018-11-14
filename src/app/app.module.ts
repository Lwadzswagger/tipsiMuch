import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule} from 'angularfire2/database';
import { AngularFireAuthModule} from 'angularfire2/auth'
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment.prod';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { AddStoreService } from './services/add-store.service';
import { AuthService } from './services/auth.service';
import { AddStoreComponent } from './components/add-store/add-store.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    AddStoreComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AppRoutingModule
  ],
  providers: [ AddStoreService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
