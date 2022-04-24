import { addTask } from '../../../src/store/actions/tasksActions';
import { tasksReducer } from '../../../src/store/reducers/tasksReducer';
import { TasksState } from '../../../src/types/tasksTypes';

let emptyTasksState: TasksState;
let nonEmptyTasksState: TasksState;

beforeEach(() => {
    emptyTasksState = {
        tasks: [[], [], [], []],
    };
    nonEmptyTasksState = {
        tasks: [
            [],
            ['123', 'rty', 'йцу'],
            [],
        ],
    };
});

describe('tasks reducer - add new task', () => {
    test('add a new task(eng) in an empty list of tasks', () => {
        const name = 'qwerty ert t ';
        const listIndex = 0;
        const newState = tasksReducer(
            emptyTasksState,
            addTask(name, listIndex),
        );

        expect(newState).toStrictEqual({
            tasks: [
                ['qwerty ert t'],
                [],
                [],
                [],
            ],
        });
    });

    test('add a new task(rus) in a last empty list(we have 3 empty list before our list)', () => {
        const name = ' кена гп ';
        const listIndex = 3;
        const newState = tasksReducer(
            emptyTasksState,
            addTask(name, listIndex),
        );

        expect(newState).toStrictEqual({
            tasks: [
                [],
                [],
                [],
                ['кена гп'],
            ],
        });
    });

    test('add a new task(eng+rus+num) in a list which have another tasks', () => {
        const name = 'rtg кена гп 123';
        const listIndex = 1;
        const newState = tasksReducer(
            nonEmptyTasksState,
            addTask(name, listIndex),
        );

        expect(newState).toStrictEqual({
            tasks: [
                [],
                ['123', 'rty', 'йцу', 'rtg кена гп 123'],
                [],
            ],
        });
    });
});
