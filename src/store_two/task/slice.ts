import { createSlice } from '@reduxjs/toolkit';
import { Task, TaskBoardReducers, TaskBoardState } from './models';

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
      console.log(highestNumber);
      newTasks[highestNumber + 1] = Task.create();
      console.log(newTasks);
      return {
        ...state,
        tasks: newTasks,
      };
    },
    renameTask: (state, action) => {
      const { name, index } = action.payload;
      const newTasks = { ...state.tasks };
      newTasks[index] = Task.rename(state.tasks[index], name);

      return newTasks;
    },
    removeTask: (state, action) => {
      const newTasks = { ...state.tasks };
      delete newTasks[action.payload];

      return newTasks;
    },
    dragDropTask: (state, action) => {
      //   const { indexTo, indexFrom } = action.payload;
      //   const task = state.tasks.splice(indexFrom, 1);
      //   state.tasks.splice(indexTo, 0, task[0]);
    },
  },
});

const taskBoardReducer = taskBoardSlice.reducer;
export const { addTask, renameTask, removeTask, dragDropTask } =
  taskBoardSlice.actions;
export default taskBoardReducer;
