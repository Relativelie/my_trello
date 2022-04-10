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
                    while (listsNumber !== 0) {
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

        case TasksActionTypes.DRAG_DROP_LIST_WITH_TASK:
            const tasksC = state.tasks;
            const draggingList = tasksC.splice(action.indexFrom, 1)[0];
            tasksC.splice(action.indexTo, 0, draggingList);
            return {
                ...state,
                tasks: tasksC
            }

        case TasksActionTypes.DRAG_DROP_TASKS:
            const listFrom = state.tasks[action.listFrom];
            const copyOfTasks = state.tasks;
            if (state.tasks[action.listTo] === undefined) {
                let numberOfLists = action.listTo + 1 - state.tasks.length;
                while (numberOfLists !== 0) {
                    copyOfTasks.push([]);
                    numberOfLists -= 1
                }
            }
            const listTo = copyOfTasks[action.listTo];
            const draggingTask = listFrom.splice(action.indexFrom, 1)[0];
            listTo.splice(action.indexTo, 0, draggingTask);

            copyOfTasks[action.listFrom] = listFrom;
            copyOfTasks[action.listTo] = listTo;
            return {
                ...state,
                tasks: copyOfTasks
            }

        case TasksActionTypes.REMOVE_ALL_TASKS_FROM_LIST:
            const copyTasks = state.tasks;
            copyTasks.splice(action.indexOfList, 1);
            return {
                ...state,
                tasks: copyTasks
            }

        default:
            return state
    }
}