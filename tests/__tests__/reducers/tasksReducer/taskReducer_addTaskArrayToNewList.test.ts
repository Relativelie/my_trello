import { addTaskArrayToNewList } from '../../../../src/store/actions/subtaskActions';
import { tasksReducer } from '../../../../src/store/reducers/tasksReducer';
import { TasksState } from '../../../../src/types/subtaskTypes';

let emptyTasksState: TasksState;
let nonEmptyTasksState: TasksState;

beforeEach(() => {
  emptyTasksState = {
    tasks: [],
  };
  nonEmptyTasksState = {
    tasks: [['feed'], []],
  };
});

describe('tasks reducer - add task array to new list', () => {
  test('add a first new list', () => {
    const listIndex = 0;

    const newState = tasksReducer(
      emptyTasksState,
      addTaskArrayToNewList(listIndex),
    );
    expect(newState).toStrictEqual({
      tasks: [[]],
    });
  });

  test('add a third new list', () => {
    const listIndex = 2;

    const newState = tasksReducer(
      nonEmptyTasksState,
      addTaskArrayToNewList(listIndex),
    );
    expect(newState).toStrictEqual({
      tasks: [['feed'], [], []],
    });
  });
});
