import { Component } from '@angular/core';
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'websitee';
  icon1 = faSearch;
  icon2 = faShoppingCart;
}
