export interface TasksState {
    tasks: any,
}


export enum TasksActionTypes {
    RENAME_TASK = "RENAME_TASK",
    REMOVE_TASK = "REMOVE_TASK",
    ADD_NEW_TASK = "ADD_NEW_TASK",

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



export type TaskAction =
    removeTask
    | addTask
    | renameTask

