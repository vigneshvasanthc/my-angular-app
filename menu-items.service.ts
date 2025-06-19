import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable()
export class MenuItemsService {
  private nameList: string[] = [];
  isEdit = false;
  editingIndex: number | null = null;

  textFormGroup = new FormGroup({
    newUserName: new FormControl('', Validators.required),
  });

  getList(): string[] {
    return this.nameList;
  }

  getForm(): FormGroup {
    return this.textFormGroup;
  }

  addOrUpdate(): void {
    const nameNew = this.textFormGroup.get('newUserName')?.value?.trim();
    if (!nameNew) {
      return;
    }

    if (this.isEdit && this.editingIndex !== null) {
      this.nameList[this.editingIndex] = nameNew;
    } else {
      this.nameList.push(nameNew);
    }
    this.resetForm();
  }

  delete(index: number): void {
    this.nameList.splice(index, 1);
    this.resetForm();
  }

  edit(index: number): void {
    const value = this.nameList[index];

    this.textFormGroup.patchValue({ newUserName: value });
    this.isEdit = true;
    this.editingIndex = index;
  }

  resetForm(): void {
    this.textFormGroup.reset();
    this.isEdit = false;
    this.editingIndex = null;
  }
}
