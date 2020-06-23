import { Injectable } from '@angular/core';
import { TODOItem } from '@app/shared/models/todoitem';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TodoListAPIService {
  private todoListUrl = '//localhost:8080/todos';

  constructor(private httpClient: HttpClient) {}

  public getTodos() {
    return this.httpClient.get<TODOItem[]>(this.todoListUrl);
  }

  public postTodo(todo: TODOItem) {
    return this.httpClient.post<TODOItem>(this.todoListUrl, todo);
  }

  public deleteTodo(id: number) {
    return this.httpClient.delete(`${this.todoListUrl}/${id}`);
  }

  public editTodo(todo: TODOItem) {
    return this.httpClient.put<TODOItem>(`${this.todoListUrl}/${todo.id}`, { title: todo.title, text: todo.text});
  }
}
