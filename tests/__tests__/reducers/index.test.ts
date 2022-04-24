import { reducers } from '../../../src/store/reducers';
import { inputFieldReducer } from '../../../src/store/reducers/inputFieldReducer';
import { listOfTasksReducer } from '../../../src/store/reducers/listOfTasksReducer';
import { tasksReducer } from '../../../src/store/reducers/tasksReducer';

test('necessary reducers ​​are prepared', () => {
    expect(reducers.inputFieldReducer).toEqual(inputFieldReducer);
    expect(reducers.listOfTasksReducer).toEqual(listOfTasksReducer);
    expect(reducers.tasksReducer).toEqual(tasksReducer);
});
