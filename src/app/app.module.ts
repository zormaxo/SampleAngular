import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PrivacyComponent } from './home/privacy/privacy.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './register/register.component';
import { ShopModule } from './shop/shop.module';

@NgModule({
  declarations: [AppComponent, HomeComponent, PrivacyComponent, RegisterComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, ShopModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
