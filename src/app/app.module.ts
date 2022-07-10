import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PrivacyComponent } from './home/privacy/privacy.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './register/register.component';
import { ShopModule } from './shop/shop.module';
import { BigsortDirective } from './bigsort.directive';

@NgModule({
  declarations: [AppComponent, HomeComponent, PrivacyComponent, RegisterComponent, BigsortDirective],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, ShopModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
