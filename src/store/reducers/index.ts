import { combineReducers } from "redux";

import { listOfTasksReducer } from "./listOfTasksReducer";
import {commonReducer} from "./commonReducer";
import {tasksReducer} from "./tasksReducer";


export const reducers = {
    listOfTasksReducer,
    commonReducer,
    tasksReducer
};

export const rootReducer = combineReducers(
    reducers
);

export type RootState = ReturnType<typeof rootReducer>;