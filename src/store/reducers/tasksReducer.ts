import { TasksState, TaskAction, TasksActionTypes } from "../../types/tasksTypes";

const initialState: TasksState = {
    tasks: [[0, "jsj"], [3333344455, "333333"]]
}

export const tasksReducer = (state = initialState, action: TaskAction): TasksState => {
    switch (action.type) {
        case TasksActionTypes.ADD_NEW_TASK:
            if (action.name != null && action.name.trim().length !== 0) {
                const tasksCopy = state.tasks;
                tasksCopy[action.indexOfList].push(action.name);
                console.log("tasksCopy", tasksCopy)
                return {
                    ...state,
                    tasks: tasksCopy
                }
            }
            else {
                return {
                    ...state
                }
            }

        case TasksActionTypes.RENAME_TASK:
            const copy = state.tasks;
            copy[action.indexOfList][action.indexOfTask] = action.value;
            return {
                ...state, 
                tasks: copy
            }
        
        case TasksActionTypes.REMOVE_TASK:
            const allTasks = state.tasks;
            const listTasks = state.tasks[action.indexOfList];
            listTasks.splice(action.indexOfTask, 1);
            allTasks[action.indexOfList] = listTasks;
            return {
                ...state,
                tasks: allTasks
            }
            
        default:
            return state
    }
}