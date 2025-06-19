import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MenuItemsService {
  private nameList: string[] = [];

  getList(): string[] {
    return this.nameList;
  }

  addName(name: string): void {
    this.nameList.push(name);
  }

  updateName(index: number, newName: string): void {
    this.nameList[index] = newName;
  }

  deleteName(index: number): void {
    this.nameList.splice(index, 1);
  }

  resetList(): void {
    this.nameList = [];
  }
}
