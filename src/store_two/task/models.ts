import { PayloadAction } from '@reduxjs/toolkit';

export type TaskBoardState = {
  tasks: {
    [key: number]: Task;
  };
};

export class Task {
  name: string;
  subtasks: string[];

  constructor(name: string, subtasks: string[] = []) {
    this.name = name;
    this.subtasks = subtasks;
  }

  static create(): Task {
    const name = 'Write the name of the task';
    return new Task(name, []);
  }

  static addSubtask(task: Task, subtask: string): Task {
    const newSubtasks = [...task.subtasks, subtask];
    return new Task(task.name, newSubtasks);
  }

  static rename(task: Task, name: string): Task {
    return new Task(name, task.subtasks);
  }
}

export type TaskBoardReducers = {
  addTask: (state: TaskBoardState) => void;
  renameTask: (
    state: TaskBoardState,
    action: PayloadAction<{ name: string; index: number }>,
  ) => void;
  removeTask: (state: TaskBoardState, action: PayloadAction<number>) => void;
  dragDropTask: (
    state: TaskBoardState,
    action: PayloadAction<{ indexTo: number; indexFrom: number }>,
  ) => void;
};
