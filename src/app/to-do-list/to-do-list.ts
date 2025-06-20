import { Component, inject, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { IToDoList } from './to-do-list.model';
import { ToDoListService } from './to-do-list.service';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-to-do-list',
  imports: [MatTableModule, MatIconModule, MatCardModule, HttpClientModule],
  providers: [ToDoListService],
  templateUrl: './to-do-list.html',
  styleUrl: './to-do-list.scss',
})
export class ToDoList implements OnInit {
  showData: string[] = ['id', 'title', 'completed'];

  dataSource = new MatTableDataSource<IToDoList>();

  private toDoListService = inject(ToDoListService);

  ngOnInit(): void {
    this.toDoListService.getToDoList().subscribe((data) => {
      this.dataSource.data = data;
    });
  }
}
