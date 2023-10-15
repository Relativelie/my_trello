export interface TasksState {
  tasks: Array<string[]>;
}

export enum TasksActionTypes {
  RENAME_TASK = 'RENAME_TASK',
  REMOVE_TASK = 'REMOVE_TASK',
  ADD_NEW_TASK = 'ADD_NEW_TASK',
  REMOVE_ALL_TASKS_FROM_LIST = 'REMOVE_ALL_TASKS_FROM_LIST',
  DRAG_DROP_LIST_WITH_TASK = 'DRAG_DROP_LIST_WITH_TASK',
  DRAG_DROP_TASKS = 'DRAG_DROP_TASKS',
  ADD_TASK_ARRAY_TO_NEWLIST = 'ADD_TASK_ARRAY_TO_NEWLIST',
}

interface AddTaskArrayToNewList {
  type: TasksActionTypes.ADD_TASK_ARRAY_TO_NEWLIST;
  taskIndex: number;
}

interface RemoveTask {
  type: TasksActionTypes.REMOVE_TASK;
  indexOfTask: number;
  indexOfSubtask: number;
}

interface AddTask {
  type: TasksActionTypes.ADD_NEW_TASK;
  name: string;
  indexOfTask: number;
}

interface RenameTask {
  type: TasksActionTypes.RENAME_TASK;
  indexOfTask: number;
  indexOfSubtask: number;
  value: string;
}

interface RemoveAllTasksFromList {
  type: TasksActionTypes.REMOVE_ALL_TASKS_FROM_LIST;
  indexOfTask: number;
}

interface DragDropListWithTasks {
  type: TasksActionTypes.DRAG_DROP_LIST_WITH_TASK;
  indexTo: number;
  indexFrom: number;
}

interface DragDropTasks {
  type: TasksActionTypes.DRAG_DROP_TASKS;
  taskTo: number;
  taskFrom: number;
  indexTo: number;
  indexFrom: number;
}

export type TaskAction =
  | RemoveTask
  | AddTask
  | RenameTask
  | RemoveAllTasksFromList
  | DragDropListWithTasks
  | DragDropTasks
  | AddTaskArrayToNewList;
