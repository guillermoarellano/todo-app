import { Injectable } from '@angular/core';
import { TODOItem, APIInterface } from '@app/shared/models/interfaces';
import { HttpClient } from '@angular/common/http';
import { CreateTodo, UpdateTodo, DeleteTodo } from '@app/store';

@Injectable()
export class TodoListAPIService {
  private todoListUrl = '//localhost:8080/todos';

  constructor(private httpClient: HttpClient) {}

  public getTodos() {
    return this.httpClient.get<TODOItem[]>(this.todoListUrl);
  }

  public createTodo(todo: APIInterface) {
    return this.httpClient.post<any>(this.todoListUrl, todo);
  }

  public deleteTodo(todoId: number) {
    return this.httpClient.delete(`${this.todoListUrl}/${todoId}`);
  }

  public editTodo(todo: TODOItem) {
    return this.httpClient.put<TODOItem>(`${this.todoListUrl}/${todo.id}`, { title: todo.title, text: todo.text});
  }
}
