import { Component, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  FormControl,
  FormControlName,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

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
  userNewNameList: string[] = [];

  isEdit = false;
  editingIndex: number | null = null;

  textFormGroup = new FormGroup({
    newUserName: new FormControl('', Validators.required),
  });

  addList(): void {
    const nameNew = this.textFormGroup.get('newUserName')?.value?.trim();
    console.log(nameNew);

    // if (nameNew) {
    //   this.userNewNameList.push(nameNew);
    //   this.textFormGroup.get('newUserName')?.reset();
    // }
    if (!nameNew) {
      return;
    }

    if (this.isEdit && this.editingIndex !== null) {
      this.userNewNameList[this.editingIndex] = nameNew;
      this.resetForm();
    } else {
      this.userNewNameList.push(nameNew);
      this.textFormGroup.reset();
    }
  }

  deleteList(index: number): void {
    this.userNewNameList.splice(index, 1);
    this.resetForm();
  }

  updateList(index: number): void {
    const nameNew = this.userNewNameList[index];
    this.textFormGroup.patchValue({
      newUserName: nameNew,
    });
    this.isEdit = true;
    this.editingIndex = index;
  }

  resetForm(): void {
    this.textFormGroup.reset();
    this.isEdit = false;
    this.editingIndex = null;
  }
}
