import { PayloadAction } from '@reduxjs/toolkit';
import TaskEntity from './TaskEntity';

export type TaskBoardState = {
  tasks: {
    [key: number]: TaskEntity;
  };
};

export type TaskBoardReducers = {
  addTask: (state: TaskBoardState) => void;
  renameTask: (
    state: TaskBoardState,
    action: PayloadAction<{ name: string; index: number }>,
  ) => void;
  removeTask: (state: TaskBoardState, action: PayloadAction<number>) => void;
  renameSubtask: (
    state: TaskBoardState,
    action: PayloadAction<{
      name: string;
      subtaskIndex: number;
      taskIndex: number;
    }>,
  ) => void;
  removeSubtask: (
    state: TaskBoardState,
    action: PayloadAction<{ taskIndex: number; subtaskIndex: number }>,
  ) => void;
  addSubtask: (
    state: TaskBoardState,
    action: PayloadAction<{ taskIndex: number; name: string }>,
  ) => void;
  dragDropTask: (
    state: TaskBoardState,
    action: PayloadAction<{ indexTo: number; indexFrom: number }>,
  ) => void;
  dragDropSubtask: (
    state: TaskBoardState,
    action: PayloadAction<{
      toIndexTask: number;
      fromIndexTask: number;
      toIndexSubtask: number;
      fromIndexSubtask: number;
    }>,
  ) => void;
};
