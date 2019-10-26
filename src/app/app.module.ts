import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule ,FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { environment } from "../environments/environment";

import { DestinationComponent } from './destination/destination.component';
import { DestinationListComponent } from './destination-list/destination-list.component';
import { DestinationService} from "./shared/destination.service";

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HeroComponent } from './hero/hero.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { DestinationPageComponent } from './destination-page/destination-page.component';

@NgModule({
 declarations: [
   AppComponent,
   DestinationComponent,
   DestinationListComponent,
   NavbarComponent,
   FooterComponent,
   HeroComponent,
   SidebarComponent,
   HomePageComponent,
   AboutPageComponent,
   DestinationPageComponent
 ],
 imports: [
   BrowserModule,
   AppRoutingModule,
   ReactiveFormsModule,
   AngularFireModule.initializeApp(environment.firebaseConfig),// we called initializeApp function to provide connection details
   AngularFireDatabaseModule, // we will import the classes here too
   FormsModule
 ],
 providers: [DestinationService],
 bootstrap: [AppComponent]
})
export class AppModule { }