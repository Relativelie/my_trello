import { TaskAction, TasksActionTypes } from "../../types/tasksTypes";

export const removeTask = (indexOfTask: number): TaskAction => ({
    type: TasksActionTypes.REMOVE_TASK,
    indexOfTask
})

export const addTask = (name: string, indexOfList: number) :TaskAction => ({
    type: TasksActionTypes.ADD_NEW_TASK,
    name,
    indexOfList
})

export const renameTask = ( indexOfList: number, indexOfTask: number, value: string) :TaskAction => ({
    type: TasksActionTypes.RENAME_TASK,
    indexOfList,
    indexOfTask,
    value
})