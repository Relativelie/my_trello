import { TasksState, TaskAction, TasksActionTypes } from '../../types/tasksTypes';

const initialState: TasksState = {
    tasks: [],
};

export const tasksReducer = (state = initialState, action: TaskAction): TasksState => {
    switch (action.type) {
        case TasksActionTypes.ADD_NEW_TASK:
            if (action.name != null && action.name.trim().length !== 0) {
                const tasksCopy = state.tasks;
                tasksCopy[action.indexOfList].push(action.name.trim());
                return {
                    ...state,
                    tasks: tasksCopy,
                };
            } else {
                return {
                    ...state,
                };
            }

        case TasksActionTypes.RENAME_TASK: {
            const copy = state.tasks;
            copy[action.indexOfList][action.indexOfTask] = action.value.trim();
            return {
                ...state,
                tasks: copy,
            };
        }

        case TasksActionTypes.REMOVE_TASK: {
            const allTasks = state.tasks;
            const listTasks = state.tasks[action.indexOfList];
            if (action.indexOfTask >= 0) {
                listTasks.splice(action.indexOfTask, 1);
                allTasks[action.indexOfList] = listTasks;
            }
            return {
                ...state,
                tasks: allTasks,
            };
        }

        case TasksActionTypes.DRAG_DROP_LIST_WITH_TASK: {
            const tasksC = state.tasks;
            const draggingList = tasksC.splice(action.indexFrom, 1)[0];
            tasksC.splice(action.indexTo, 0, draggingList);
            return {
                ...state,
                tasks: tasksC,
            };
        }

        case TasksActionTypes.DRAG_DROP_TASKS: {
            const listFrom = state.tasks[action.listFrom];
            const copyOfTasks = state.tasks;
            if (action.indexFrom >= 0
                && action.indexTo >= 0
                && action.listFrom >= 0
                && action.listTo >= 0) {
                const listTo = copyOfTasks[action.listTo];
                const draggingTask = listFrom.splice(action.indexFrom, 1)[0];
                listTo.splice(action.indexTo, 0, draggingTask);
                copyOfTasks[action.listFrom] = listFrom;
                copyOfTasks[action.listTo] = listTo;
            }
            return {
                ...state,
                tasks: copyOfTasks,
            };
        }

        case TasksActionTypes.REMOVE_ALL_TASKS_FROM_LIST: {
            const copyTasks = state.tasks;
            if (action.indexOfList >= 0) {
                copyTasks.splice(action.indexOfList, 1);
            }
            return {
                ...state,
                tasks: copyTasks,
            };
        }

        case TasksActionTypes.ADD_TASK_ARRAY_TO_NEWLIST: {
            const { tasks } = state;
            if (state.tasks[action.listIndex] === undefined) {
                let numberOfLists = action.listIndex + 1 - state.tasks.length;
                while (numberOfLists !== 0) {
                    tasks.push([]);
                    numberOfLists -= 1;
                }
            }
            return {
                ...state,
                tasks,
            };
        }

        default:
            return state;
    }
};
