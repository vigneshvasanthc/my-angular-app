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
  templateUrl: './menu-items.html',
  styleUrl: './menu-items.scss',
})
export class MenuItems {
  isEdit = false;
  editingIndex: number | null = null;

  textFormGroup = new FormGroup({
    newUserName: new FormControl('', Validators.required),
  });

  constructor(private _menuItemsService: MenuItemsService) {}

  get userNameList(): string[] {
    return this._menuItemsService.getList();
  }

  addList(): void {
    const nameNew = this.textFormGroup.get('newUserName')?.value?.trim();

    if (!nameNew) {
      return;
    }

    if (this.isEdit && this.editingIndex !== null) {
      this._menuItemsService.updateName(this.editingIndex, nameNew);
      this.resetForm();
    } else {
      this._menuItemsService.addName(nameNew);
      this.textFormGroup.reset();
    }
  }

  deleteList(index: number): void {
    this._menuItemsService.deleteName(index);
    this.resetForm();
  }

  updateList(index: number): void {
    const nameNew = this.userNameList[index];
    this.textFormGroup.patchValue({ newUserName: nameNew });
    this.isEdit = true;
    this.editingIndex = index;
  }

  resetForm(): void {
    this.textFormGroup.reset();
    this.isEdit = false;
    this.editingIndex = null;
  }
}
