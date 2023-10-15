import { dragDropListWithTasks } from '../../../../src/store/actions/subtaskActions';
import { tasksReducer } from '../../../../src/store/reducers/tasksReducer';
import { TasksState } from '../../../../src/types/subtaskTypes';

let nonEmptyTasksState: TasksState;

beforeEach(() => {
  nonEmptyTasksState = {
    tasks: [['24', 'fvf'], ['123', 'rty', 'йцу'], ['dfv']],
  };
});

describe('tasks reducer - drag and drop a list with tasks', () => {
  test('dnd to < from', () => {
    const to = 1;
    const from = 2;

    const newState = tasksReducer(
      nonEmptyTasksState,
      dragDropListWithTasks(to, from),
    );

    expect(newState).toStrictEqual({
      tasks: [['24', 'fvf'], ['dfv'], ['123', 'rty', 'йцу']],
    });
  });

  test('dnd to > from', () => {
    const to = 1;
    const from = 0;

    const newState = tasksReducer(
      nonEmptyTasksState,
      dragDropListWithTasks(to, from),
    );

    expect(newState).toStrictEqual({
      tasks: [['123', 'rty', 'йцу'], ['24', 'fvf'], ['dfv']],
    });
  });

  test('dnd to === from', () => {
    const to = 0;
    const from = 0;

    const newState = tasksReducer(
      nonEmptyTasksState,
      dragDropListWithTasks(to, from),
    );

    expect(newState).toStrictEqual({
      ...nonEmptyTasksState,
    });
  });
});
