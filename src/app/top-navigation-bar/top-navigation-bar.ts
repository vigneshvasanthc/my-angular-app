import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-top-navigation-bar',
  imports: [MatIconModule, MatMenuModule, RouterModule],
  templateUrl: './top-navigation-bar.html',
  styleUrl: './top-navigation-bar.scss',
})
export class TopNavigationBar {}
