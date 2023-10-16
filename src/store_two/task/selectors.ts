import { createSelector } from '@reduxjs/toolkit';
import { TaskBoardState } from './models';
import { RootState } from '../store_two';

export const selectTaskBoardState = (state: RootState): TaskBoardState =>
  state.taskBoard;

export const getTasks = createSelector(
  selectTaskBoardState,
  (taskBoardState) => taskBoardState.tasks,
);
