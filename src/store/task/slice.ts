import { createSlice } from '@reduxjs/toolkit';
import { TaskBoardReducers, TaskBoardState } from './models';
import TaskEntity from './TaskEntity';

const taskBoardSlice = createSlice<TaskBoardState, TaskBoardReducers>({
  name: 'task board',
  initialState: {
    tasks: [],
  },
  reducers: {
    addTask: (state) => {
      const newTasks = [...state.tasks];
      newTasks.push(TaskEntity.create());

      return {
        ...state,
        tasks: newTasks,
      };
    },

    renameTask: (state, action) => {
      const { name, index } = action.payload;
      const newTasks = [...state.tasks];
      newTasks[index] = TaskEntity.renameTask(state.tasks[index], name);

      return {
        ...state,
        tasks: newTasks,
      };
    },

    removeTask: (state, action) => {
      const newTasks = [...state.tasks];
      newTasks.splice(action.payload, 1);

      return {
        ...state,
        tasks: newTasks,
      };
    },

    removeSubtask: (state, action) => {
      const { taskIndex, subtaskIndex } = action.payload;
      const newTasks = [...state.tasks];
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
      const newTasks = [...state.tasks];
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
      const newTasks = [...state.tasks];
      newTasks[taskIndex] = TaskEntity.addSubtask(state.tasks[taskIndex], name);

      return {
        ...state,
        tasks: newTasks,
      };
    },

    dragDropTask: (state, action) => {
      const { indexFrom, indexTo } = action.payload;
      const newTasks = [...state.tasks];
      const [removed] = newTasks.splice(indexFrom, 1);
      newTasks.splice(indexTo, 0, removed);

      return {
        ...state,
        tasks: newTasks,
      };
    },

    dragDropSubtask: (state, action) => {
      const { fromIndexTask, fromIndexSubtask, toIndexTask, toIndexSubtask } =
        action.payload;
      const newTasks = [...state.tasks];
      const [removed] = newTasks[fromIndexTask].subtasks.splice(
        fromIndexSubtask,
        1,
      );
      newTasks[toIndexTask].subtasks.splice(toIndexSubtask, 0, removed);

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
