import { addNewList } from '../../../../src/store/actions/taskActions';
import { listOfTasksReducer } from '../../../../src/store/reducers/listOfTasksReducer';
import { ListOfTasksState } from '../../../../src/types/tasksTypes';

let oneListState: ListOfTasksState;

beforeEach(() => {
  oneListState = {
    lists: ['Write the name of the project'],
  };
});

describe('list of tasks reducer - add new list', () => {
  test('add new list', () => {
    const newState = listOfTasksReducer(oneListState, addNewList());

    expect(newState).toStrictEqual({
      ...oneListState,
      lists: ['Write the name of the project', 'Write the name of the project'],
    });
  });
});
