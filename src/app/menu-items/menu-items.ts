import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MenuItemsService } from './menu-items.service';

@Component({
  selector: 'app-menu-items',
  imports: [
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
  ],
  providers: [MenuItemsService],
  templateUrl: './menu-items.html',
  styleUrl: './menu-items.scss',
})
export class MenuItems {
  constructor(public _menuItemsService: MenuItemsService) {}
}
