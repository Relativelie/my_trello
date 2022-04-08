import { TasksState, TaskAction, TasksActionTypes } from "../../types/tasksTypes";

const initialState: TasksState = {
    tasks: []
}

export const tasksReducer = (state = initialState, action: TaskAction): TasksState => {
    switch (action.type) {
        case TasksActionTypes.ADD_NEW_TASK:
            if (action.name != null && action.name.trim().length !== 0) {
                const tasksCopy = state.tasks;
                if (tasksCopy[action.indexOfList] !== undefined) {
                    tasksCopy[action.indexOfList].push(action.name);
                }
                else {
                    let listsNumber = action.indexOfList + 1 - tasksCopy.length;
                    while (listsNumber != 0) {
                        console.log(listsNumber, listsNumber)
                        tasksCopy.push([]);
                        listsNumber -= 1
                    }
                    tasksCopy[action.indexOfList].push(action.name);
                }
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

        case TasksActionTypes.REMOVE_ALL_TASKS_FROM_LIST:
            const tasksCopy = state.tasks;
            tasksCopy.splice(action.indexOfList, 1);
            return {
                ...state,
                tasks: tasksCopy
            }

        default:
            return state
    }
}