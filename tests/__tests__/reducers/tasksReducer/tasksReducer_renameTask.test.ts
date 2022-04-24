import { renameTask } from '../../../src/store/actions/tasksActions';
import { tasksReducer } from '../../../src/store/reducers/tasksReducer';
import { TasksState } from '../../../src/types/tasksTypes';

let nonEmptyTasksState: TasksState;

beforeEach(() => {
    nonEmptyTasksState = {
        tasks: [
            ['24', 'fvf'],
            ['123', 'rty', 'йцу'],
            ['dfv'],
        ],
    };
});

describe('tasks reducer - rename task', () => {
    test('rename first task', () => {
        const listIndex = 1;
        const taskIndex = 0;
        const value = ' зщш 123 !@#$%^&*()_+?|>< ';
        const newState = tasksReducer(
            nonEmptyTasksState,
            renameTask(listIndex, taskIndex, value),
        );

        expect(newState).toStrictEqual({
            tasks: [
                ['24', 'fvf'],
                ['зщш 123 !@#$%^&*()_+?|><', 'rty', 'йцу'],
                ['dfv'],
            ],
        });
    });

    test('rename last task', () => {
        const listIndex = 0;
        const taskIndex = 1;
        const value = 'WERTYU ji';
        const newState = tasksReducer(
            nonEmptyTasksState,
            renameTask(listIndex, taskIndex, value),
        );

        expect(newState).toStrictEqual({
            tasks: [
                ['24', 'WERTYU ji'],
                ['123', 'rty', 'йцу'],
                ['dfv'],
            ],
        });
    });
});
