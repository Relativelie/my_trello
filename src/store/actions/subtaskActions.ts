import { TaskAction, TasksActionTypes } from '../../types/subtaskTypes';

export const removeSubtask = (
  indexOfTask: number,
  indexOfSubtask: number,
): TaskAction => ({
  type: TasksActionTypes.REMOVE_TASK,
  indexOfTask,
  indexOfSubtask,
});

export const addTask = (name: string, indexOfTask: number): TaskAction => ({
  type: TasksActionTypes.ADD_NEW_TASK,
  name,
  indexOfTask,
});

export const renameTask = (
  indexOfTask: number,
  indexOfSubtask: number,
  value: string,
): TaskAction => ({
  type: TasksActionTypes.RENAME_TASK,
  indexOfTask,
  indexOfSubtask,
  value,
});

export const dragDropListWithTasks = (
  indexTo: number,
  indexFrom: number,
): TaskAction => ({
  type: TasksActionTypes.DRAG_DROP_LIST_WITH_TASK,
  indexTo,
  indexFrom,
});

export const dragDropTasks = (
  taskTo: number,
  taskFrom: number,
  indexTo: number,
  indexFrom: number,
): TaskAction => ({
  type: TasksActionTypes.DRAG_DROP_TASKS,
  taskTo,
  taskFrom,
  indexTo,
  indexFrom,
});

export const removeAllTasksFromList = (indexOfTask: number): TaskAction => ({
  type: TasksActionTypes.REMOVE_ALL_TASKS_FROM_LIST,
  indexOfTask,
});

export const addTaskArrayToNewList = (taskIndex: number): TaskAction => ({
  type: TasksActionTypes.ADD_TASK_ARRAY_TO_NEWLIST,
  taskIndex,
});
