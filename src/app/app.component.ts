import { Component } from '@angular/core';
import { enableProdMode } from '@angular/core'

enableProdMode();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  company = 'Petit Gateau Bakeshop'
  location = 'Portland, Oregon'
  email = 'petitgateaubakeshop@gmail.com'
}
