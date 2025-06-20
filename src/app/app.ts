import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuItems } from './menu-items/menu-items';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuItems],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'my-angular-app';
}
