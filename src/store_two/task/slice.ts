import { createSlice } from '@reduxjs/toolkit';
import { TaskBoardReducers, TaskBoardState } from './models';
import TaskEntity from './TaskEntity';

const taskBoardSlice = createSlice<TaskBoardState, TaskBoardReducers>({
  name: 'task board',
  initialState: {
    tasks: {},
  },
  reducers: {
    addTask: (state) => {
      const highestNumber = Object.keys(state.tasks).length
        ? Math.max(...Object.keys(state.tasks).map(Number))
        : 0;
      const newTasks = { ...state.tasks };
      newTasks[highestNumber + 1] = TaskEntity.create();
      return {
        ...state,
        tasks: newTasks,
      };
    },

    renameTask: (state, action) => {
      const { name, index } = action.payload;
      const newTasks = { ...state.tasks };
      newTasks[index] = TaskEntity.renameTask(state.tasks[index], name);

      return {
        ...state,
        tasks: newTasks,
      };
    },

    removeTask: (state, action) => {
      const newTasks = { ...state.tasks };
      delete newTasks[action.payload];

      return {
        ...state,
        tasks: newTasks,
      };
    },

    removeSubtask: (state, action) => {
      const { taskIndex, subtaskIndex } = action.payload;
      const newTasks = { ...state.tasks };
      newTasks[taskIndex] = TaskEntity.removeSubtask(
        state.tasks[taskIndex],
        subtaskIndex,
      );

      return {
        ...state,
        tasks: newTasks,
      };
    },

    renameSubtask: (state, action) => {
      const { name, subtaskIndex, taskIndex } = action.payload;
      const newTasks = { ...state.tasks };
      newTasks[taskIndex] = TaskEntity.renameSubtask(
        state.tasks[taskIndex],
        name,
        subtaskIndex,
      );

      return {
        ...state,
        tasks: newTasks,
      };
    },

    addSubtask: (state, action) => {
      const { taskIndex, name } = action.payload;
      const newTasks = { ...state.tasks };
      newTasks[taskIndex] = TaskEntity.addSubtask(state.tasks[taskIndex], name);

      return {
        ...state,
        tasks: newTasks,
      };
    },

    dragDropTask: (state, action) => {
      // !!!! что то не правильно
      const { indexTo, indexFrom } = action.payload;
      const newTasks = { ...state.tasks };
      const taskTo = newTasks[indexTo];
      const taskFrom = newTasks[indexFrom];
      newTasks[indexTo] = taskFrom;
      newTasks[indexFrom] = taskTo;

      return {
        ...state,
        tasks: newTasks,
      };
    },

    dragDropSubtask: (state, action) => {
      // !!!! что то не правильно
      const { toIndexTask, fromIndexTask, toIndexSubtask, fromIndexSubtask } =
        action.payload;
      const newTasks = { ...state.tasks };
      const taskTo = newTasks[toIndexTask];
      const taskFrom = newTasks[fromIndexTask];
      const subtaskTo = taskTo.subtasks[toIndexSubtask];
      const subtaskFrom = taskFrom.subtasks[fromIndexSubtask];

      taskTo.subtasks[toIndexSubtask] = subtaskFrom;
      taskFrom.subtasks[fromIndexSubtask] = subtaskTo;

      newTasks[toIndexTask] = taskTo;
      newTasks[fromIndexTask] = taskFrom;

      return {
        ...state,
        tasks: newTasks,
      };
    },
  },
});

const taskBoardReducer = taskBoardSlice.reducer;
export const {
  addTask,
  renameTask,
  removeTask,
  renameSubtask,
  removeSubtask,
  addSubtask,
  dragDropTask,
  dragDropSubtask,
} = taskBoardSlice.actions;
export default taskBoardReducer;
