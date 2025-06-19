import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable()
export class MenuItemsService {
  private nameList: string[] = [];
  private isEdit = false;
  private editingIndex: number | null = null;

  getList(): string[] {
    return this.nameList;
  }

  getIsEditing(): boolean {
    return this.isEdit;
  }

  getEditIndex(): number | null {
    return this.editingIndex;
  }

  startEdit(index: number): void {
    this.isEdit = true;
    this.editingIndex = index;
  }

  cancelEdit(): void {
    this.isEdit = false;
    this.editingIndex = null;
  }

  add(name: string): void {
    this.nameList.push(name);
  }

  update(name: string): void {
    if (this.editingIndex !== null) {
      this.nameList[this.editingIndex] = name;
    }
    this.cancelEdit();
  }

  delete(index: number): void {
    this.nameList.splice(index, 1);
    this.cancelEdit();
  }
}
