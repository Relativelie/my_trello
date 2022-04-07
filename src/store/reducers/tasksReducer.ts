import { TasksState, TaskAction, TasksActionTypes } from "../../types/tasksTypes";

const initialState: TasksState = {
    tasks: [[0, "jsj"], [3333344455, "333333"]]
}

export const tasksReducer = (state = initialState, action: TaskAction): TasksState => {
    switch (action.type) {
        case TasksActionTypes.ADD_NEW_TASK:
            return {
                ...state,
                tasks: [
                    ...state.tasks,
                    [action.indexOfList, action.name]
                ]
            }
        case TasksActionTypes.RENAME_TASK:
            const copy = state.tasks;
            copy[action.indexOfList][action.indexOfTask] = action.value
            return {
                ...state, 
                tasks: copy
            }
            
        default:
            return state
    }
}