import { Component, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  FormControl,
  FormControlName,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-menu-items',
  imports: [
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './menu-items.html',
  styleUrl: './menu-items.scss',
})
export class MenuItems {
  newUserName: any;
  userNameList: string[] = [];

  textFormGroup = new FormGroup({
    newUserName: new FormControl(''),
  });

  addList(): void {
    const name = this.textFormGroup.get('newUserName')?.value?.trim();
    if (name) {
      this.userNameList.push(name);
      this.textFormGroup.get('newUserName')?.reset();
    }
  }
}
