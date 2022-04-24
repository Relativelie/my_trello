import { combineReducers } from 'redux';

import { listOfTasksReducer } from './listOfTasksReducer';
import { inputFieldReducer } from './inputFieldReducer';
import { tasksReducer } from './tasksReducer';

export const reducers = {
    listOfTasksReducer,
    inputFieldReducer,
    tasksReducer,
};

export const rootReducer = combineReducers(
    reducers,
);

export type RootState = ReturnType<typeof rootReducer>;
