import { TODOItem } from '@app/shared/models/interfaces';
import { TodoActions } from '.';

describe('TodoList Actions Tests', () => {
  const fakeTodos: TODOItem[] = [
    {
      id: 77,
      createdAt: 'someCreateDate',
      modifiedAt: 'someModifiedDate',
      title: 'Cool Title',
      text: 'Neat todo text'
    },
    {
      id: 88,
      createdAt: 'someCreateDate',
      modifiedAt: 'someModifiedDate',
      title: 'Super Title',
      text: 'Oh wow, another todo message',
      completed: true
    }
  ];

  it('should return LoadTodos with correct type', () => {
    expect(TodoActions.LoadTodos().type).toBe('[TodoList] load todos');
  });

  it('should return LoadTodosSuccess with correct type and props', () => {
    expect(TodoActions.LoadTodosSuccess({ todos: fakeTodos }).type).toBe(
      '[TodoList] load todos success'
    );

    expect(TodoActions.LoadTodosSuccess({ todos: fakeTodos }).todos).toEqual(
      fakeTodos
    );
  });

  it('should return LoadTodosError with correct type and props', () => {
    expect(TodoActions.LoadTodosError({ error: Error('oops!') }).type).toBe(
      '[TodoList] load todos error'
    );

    expect(TodoActions.LoadTodosError({ error: Error('oops!') }).error).toEqual(
      Error('oops!')
    );
  });

  it('should return CreateTodo with correct type and props', () => {
    expect(
      TodoActions.CreateTodo({ title: 'something', text: 'cool' }).type
    ).toBe('[TodoList] create Todo item');

    expect(
      TodoActions.CreateTodo({ title: 'something', text: 'cool' }).title
    ).toBe('something');
    expect(
      TodoActions.CreateTodo({ title: 'something', text: 'cool' }).text
    ).toBe('cool');
  });

  it('should return CreateTodoSuccess with correct type and props', () => {
    expect(
      TodoActions.CreateTodoSuccess({ todoResponse: 'your mom' }).type
    ).toBe('[TodoList] create Todo item success');

    expect(
      TodoActions.CreateTodoSuccess({ todoResponse: 'your mom' }).todoResponse
    ).toBe('your mom');
  });

  it('should return CreateTodoError with correct type and props', () => {
    expect(TodoActions.CreateTodoError({ error: Error('yikes!') }).type).toBe(
      '[TodoList] create Todo item error'
    );

    expect(
      TodoActions.CreateTodoError({ error: Error('yikes!') }).error
    ).toEqual(Error('yikes!'));
  });

  it('should return DeleteTodoSuccess with correct type and props', () => {
    expect(TodoActions.DeleteTodo({ todoId: 99 }).type).toBe(
      '[TodoList] delete Todo item'
    );

    expect(
      TodoActions.DeleteTodo({ todoId: 99 }).todoId
    ).toBe(99);
  });

  it('should return DeleteTodoSuccess with correct type and props', () => {
    expect(TodoActions.DeleteTodoSuccess({ todoId: 99 }).type).toBe(
      '[TodoList] delete Todo item success'
    );

    expect(
      TodoActions.DeleteTodoSuccess({ todoId: 99 }).todoId
    ).toBe(99);
  });

  it('should return DeleteTodoError with correct type and props', () => {
    expect(TodoActions.DeleteTodoError({ error: Error('crap!') }).type).toBe(
      '[TodoList] delete Todo item error'
    );

    expect(
      TodoActions.DeleteTodoError({ error: Error('crap!') }).error
    ).toEqual(Error('crap!'));
  });

  it('should return UpdateTodo with correct type and props', () => {
    expect(TodoActions.UpdateTodo({ todo: fakeTodos[0]}).type).toBe(
      '[TodoList] update Todo item'
    );

    expect(
      TodoActions.UpdateTodo({ todo: fakeTodos[0]}).todo
    ).toEqual(fakeTodos[0]);
  });

  it('should return UpdateTodoSuccess with correct type and props', () => {
    expect(TodoActions.UpdateTodoSuccess({ todo: fakeTodos[0]}).type).toBe(
      '[TodoList] update Todo item success'
    );

    expect(
      TodoActions.UpdateTodoSuccess({ todo: fakeTodos[0]}).todo
    ).toEqual(fakeTodos[0]);
  });

  it('should return UpdateTodoError with correct type and props', () => {
    expect(TodoActions.UpdateTodoError({ error: Error('not again!') }).type).toBe(
      '[TodoList] update Todo item error'
    );

    expect(
      TodoActions.UpdateTodoError({ error: Error('not again!') }).error
    ).toEqual(Error('not again!'));
  });

  it('should return SetTodoItemForEdit with correct type and props', () => {
    expect(TodoActions.SetTodoItemForEdit({ todo: fakeTodos[1] }).type).toBe(
      '[TodoList] SetTodoItemForEdit'
    );

    expect(
      TodoActions.SetTodoItemForEdit({ todo: fakeTodos[1] }).todo
    ).toEqual(fakeTodos[1]);
  });

  it('should return TodoItemCompleted with correct type and props', () => {
    expect(TodoActions.TodoItemCompleted({ todoId: 88 }).type).toBe(
      '[TodoList] TodoItemCompleted'
    );

    expect(
      TodoActions.TodoItemCompleted({ todoId: 88 }).todoId
    ).toBe(88);
  });
});
