import { Component, inject, Inject } from '@angular/core';
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
  private readonly _menuItemsService = inject(MenuItemsService);

  textFormGroup = new FormGroup({
    newUserName: new FormControl('', Validators.required),
  });

  get userNameList(): string[] {
    return this._menuItemsService.getList();
  }

  get isEdit(): boolean {
    return this._menuItemsService.getIsEditing();
  }

  addOrUpdate(): void {
    const name = this.textFormGroup.get('newUserName')?.value?.trim();
    if (!name) {
      return;
    }
    if (this.isEdit) {
      this._menuItemsService.update(name);
    } else {
      this._menuItemsService.add(name);
    }
    this.textFormGroup.reset();
  }

  delete(index: number): void {
    this._menuItemsService.delete(index);
    this.textFormGroup.reset();
  }

  edit(index: number): void {
    const actualName = this.userNameList[index];
    this.textFormGroup.patchValue({ newUserName: actualName });
    this._menuItemsService.startEdit(index);
  }
}
