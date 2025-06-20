import { HttpClient } from '@angular/common/http';
import { inject, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { IToDoList } from './to-do-list.model';

@Inject({})
export class ToDoListService {
  private readonly Api_Url = 'https://jsonplaceholder.typicode.com/todos';

  private httClient = inject(HttpClient);

  getToDoList(): Observable<IToDoList[]> {
    return this.httClient.get<IToDoList[]>(this.Api_Url);
  }
}
