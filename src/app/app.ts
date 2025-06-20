import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopNavigationBar } from './top-navigation-bar/top-navigation-bar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TopNavigationBar],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'my-angular-app';
}
