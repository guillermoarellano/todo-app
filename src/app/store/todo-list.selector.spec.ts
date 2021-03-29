import { TODOItem } from '@app/shared/models/interfaces';
import { TodoListState } from './reducers';
import {
  completedTodosSelectorFn,
  getTodolistState,
  isLoadingFn,
  todoItemForEditSelectorFn,
  todoListSelectorFn
} from './todo-list.selector';

describe('TodoList Selector Tests', () => {
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

  const mockState: TodoListState = {
    todos: fakeTodos,
    errors: '',
    isLoading: false,
    editTodoItemIdx: 0
  };

  it('should return the getTodolistState state selector data', () => {
    const todoListState = mockState;

    const selectedData = getTodolistState.projector(mockState);

    expect(selectedData).toEqual(todoListState);
  });

  it('should return the todoListSelectorFn state selector data', () => {
    const expectedTodos = mockState.todos;

    const selectedData = todoListSelectorFn.projector(mockState);

    expect(selectedData).toEqual(expectedTodos);
  });

  it('should return the completedTodosSelectorFn state selector data', () => {
    const expectedTodos = [
      {
        id: 88,
        createdAt: 'someCreateDate',
        modifiedAt: 'someModifiedDate',
        title: 'Super Title',
        text: 'Oh wow, another todo message',
        completed: true
      }
    ];

    const selectedData = completedTodosSelectorFn.projector(mockState.todos);

    expect(selectedData).toEqual(expectedTodos);
  });

  it('should return the todoItemForEditSelectorFn state selector data', () => {
    const expectedTodo: TODOItem = {
      id: 77,
      createdAt: 'someCreateDate',
      modifiedAt: 'someModifiedDate',
      title: 'Cool Title',
      text: 'Neat todo text'
    };
    const selectedData = todoItemForEditSelectorFn.projector(mockState);

    expect(selectedData).toEqual(expectedTodo);
  });

  it('should return the isLoadingFn state selector data', () => {
    const selectedData = isLoadingFn.projector(mockState);

    expect(selectedData).toBeFalse();
  });
});
