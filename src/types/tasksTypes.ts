export interface TasksState {
    tasks: Array<string[]>,
}

export enum TasksActionTypes {
    RENAME_TASK = "RENAME_TASK",
    REMOVE_TASK = "REMOVE_TASK",
    ADD_NEW_TASK = "ADD_NEW_TASK",
    REMOVE_ALL_TASKS_FROM_LIST = "REMOVE_ALL_TASKS_FROM_LIST",
    DRAG_DROP_LIST_WITH_TASK = "DRAG_DROP_LIST_WITH_TASK",
    DRAG_DROP_TASKS = "DRAG_DROP_TASKS"
}

interface removeTask {
    type: TasksActionTypes.REMOVE_TASK,
    indexOfList: number,
    indexOfTask: number
}

interface addTask {
    type: TasksActionTypes.ADD_NEW_TASK
    name: string,
    indexOfList: number,
}

interface renameTask {
    type: TasksActionTypes.RENAME_TASK,
    indexOfList: number,
    indexOfTask: number,
    value: string
}

interface removeAllTasksFromList {
    type: TasksActionTypes.REMOVE_ALL_TASKS_FROM_LIST,
    indexOfList: number
}

interface dragDropListWithTasks {
    type: TasksActionTypes.DRAG_DROP_LIST_WITH_TASK,
    indexTo: number,
    indexFrom: number
}

interface dragDropTasks {
    type: TasksActionTypes.DRAG_DROP_TASKS,
    listTo: number,
    listFrom: number,
    indexTo: number,
    indexFrom: number
}


export type TaskAction =
    removeTask
    | addTask
    | renameTask
    | removeAllTasksFromList
    | dragDropListWithTasks
    | dragDropTasks

