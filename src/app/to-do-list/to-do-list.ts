import { HttpClientModule } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { LastWordCapPipe } from './last-word.cap.pipe';
import { ToDoListColorDirective } from './to-do-list-color.directive';
import { IToDoList } from './to-do-list.model';
import { ToDoListService } from './to-do-list.service';

@Component({
  selector: 'app-to-do-list',
  imports: [
    MatTableModule,
    MatIconModule,
    MatCardModule,
    HttpClientModule,
    ToDoListColorDirective,
    LastWordCapPipe,
  ],
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
