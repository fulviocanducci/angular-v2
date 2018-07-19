import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { ZipcodeComponent } from './zipcode/zipcode.component';
import { TitleComponent } from './title/title.component';
import { LittleOffersComponent } from './little-offers/little-offers.component';
import { AddresscodeComponent } from './addresscode/addresscode.component';
import { NgxMaskModule } from 'ngx-mask';
import { GithubuserComponent } from './githubuser/githubuser.component';
import { OrderModule } from 'ngx-order-pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ZipcodeComponent,
    TitleComponent,
    LittleOffersComponent,
    AddresscodeComponent,
    GithubuserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxMaskModule.forRoot({}),
    OrderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
