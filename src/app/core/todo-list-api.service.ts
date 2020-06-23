import { Injectable } from '@angular/core';
import { TODOItem, APIInterface } from '@app/shared/models/interfaces';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TodoListAPIService {
  private todoListUrl = '//localhost:8080/todos';

  constructor(private httpClient: HttpClient) {}

  public getTodos() {
    return this.httpClient.get<TODOItem[]>(this.todoListUrl);
  }

  public createTodo(todo: APIInterface) {
    console.log('The payload provided is this::', todo);
    return this.httpClient.post<APIInterface>(this.todoListUrl, todo);
  }

  public deleteTodo(id: number) {
    return this.httpClient.delete(`${this.todoListUrl}/${id}`);
  }

  public editTodo(todo: TODOItem) {
    return this.httpClient.put<TODOItem>(`${this.todoListUrl}/${todo.id}`, { title: todo.title, text: todo.text});
  }
}
