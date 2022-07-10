import { Component } from '@angular/core';
import { ShopService } from './shop/shop.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'SampleAngular';
  deneme;

  constructor(private shopService: ShopService) {
    this.deneme = shopService.omer;
  }

  naner(params) {
    console.log(params);
  }
}
