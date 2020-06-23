import { Injectable } from '@angular/core';
import { TODOItem, APIInterface } from '@app/shared/models/interfaces';
import { HttpClient } from '@angular/common/http';
import { CreateTodoItem, UpdateTodoItem, DeleteTodoItem } from '@app/store';

@Injectable()
export class TodoListAPIService {
  private todoListUrl = '//localhost:8080/todos';

  constructor(private httpClient: HttpClient) {}

  public getTodos() {
    return this.httpClient.get<TODOItem[]>(this.todoListUrl);
  }

  public createTodo(todo: CreateTodoItem) {
    return this.httpClient.post<any>(this.todoListUrl, todo.payload);
  }

  public deleteTodo(action: DeleteTodoItem) {
    return this.httpClient.delete(`${this.todoListUrl}/${action.payload}`);
  }

  public editTodo(todo: UpdateTodoItem) {
    return this.httpClient.put<TODOItem>(`${this.todoListUrl}/${todo.payload.id}`, { title: todo.payload.title, text: todo.payload.text});
  }
}
