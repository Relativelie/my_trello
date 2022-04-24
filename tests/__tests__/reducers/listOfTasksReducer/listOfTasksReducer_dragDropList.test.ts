import { dragDropList } from '../../../../src/store/actions/listOfTasksActions';
import { listOfTasksReducer } from '../../../../src/store/reducers/listOfTasksReducer';
import { ListOfTasksState } from '../../../../src/types/listOfTasksTypes';

let fiveListState: ListOfTasksState;

beforeEach(() => {
    fiveListState = {
        lists: [
            '123m',
            '456g',
            '789f',
            '101112r',
            '101112oiiu',
        ],
    };
});

describe('list of tasks reducer - drag and drop list', () => {
    test('drop from < to', () => {
        const to = 3;
        const from = 0;
        const newState = listOfTasksReducer(
            fiveListState,
            dragDropList(to, from),
        );
        expect(newState).toStrictEqual({
            ...fiveListState,
            lists: [
                '456g',
                '789f',
                '101112r',
                '123m',
                '101112oiiu',
            ],
        });
    });

    test('drop from > to', () => {
        const to = 4;
        const from = 2;
        const newState = listOfTasksReducer(
            fiveListState,
            dragDropList(to, from),
        );
        expect(newState).toStrictEqual({
            ...fiveListState,
            lists: [
                '123m',
                '456g',
                '101112r',
                '101112oiiu',
                '789f',
            ],
        });
    });
    test('drop from === to', () => {
        const to = 3;
        const from = 3;
        const newState = listOfTasksReducer(
            fiveListState,
            dragDropList(to, from),
        );
        expect(newState).toStrictEqual({
            ...fiveListState,
        });
    });

    test('drop from < 0', () => {
        const to = 3;
        const from = -3;
        const newState = listOfTasksReducer(
            fiveListState,
            dragDropList(to, from),
        );
        expect(newState).toStrictEqual({
            ...fiveListState,
        });
    });

    test('drop to < 0', () => {
        const to = -3;
        const from = 4;
        const newState = listOfTasksReducer(
            fiveListState,
            dragDropList(to, from),
        );
        expect(newState).toStrictEqual({
            ...fiveListState,
        });
    });
});
