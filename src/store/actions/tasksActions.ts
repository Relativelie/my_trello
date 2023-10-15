import { TaskAction, TasksActionTypes } from '../../types/tasksTypes';

export const removeTask = (
  indexOfList: number,
  indexOfTask: number,
): TaskAction => ({
  type: TasksActionTypes.REMOVE_TASK,
  indexOfList,
  indexOfTask,
});

export const addTask = (name: string, indexOfList: number): TaskAction => ({
  type: TasksActionTypes.ADD_NEW_TASK,
  name,
  indexOfList,
});

export const renameTask = (
  indexOfList: number,
  indexOfTask: number,
  value: string,
): TaskAction => ({
  type: TasksActionTypes.RENAME_TASK,
  indexOfList,
  indexOfTask,
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

// eslint-disable-next-line max-len
export const dragDropTasks = (
  listTo: number,
  listFrom: number,
  indexTo: number,
  indexFrom: number,
): TaskAction => ({
  type: TasksActionTypes.DRAG_DROP_TASKS,
  listTo,
  listFrom,
  indexTo,
  indexFrom,
});

export const removeAllTasksFromList = (indexOfList: number): TaskAction => ({
  type: TasksActionTypes.REMOVE_ALL_TASKS_FROM_LIST,
  indexOfList,
});

export const addTaskArrayToNewList = (listIndex: number): TaskAction => ({
  type: TasksActionTypes.ADD_TASK_ARRAY_TO_NEWLIST,
  listIndex,
});
