import {
  TasksState,
  TaskAction,
  TasksActionTypes,
} from '../../types/subtaskTypes';

const initialState: TasksState = {
  tasks: [],
};

export const tasksReducer = (
  state = initialState,
  action: TaskAction,
): TasksState => {
  switch (action.type) {
    case TasksActionTypes.ADD_NEW_TASK:
      if (action.name != null && action.name.trim().length !== 0) {
        const tasksCopy = state.tasks;
        tasksCopy[action.indexOfTask].push(action.name.trim());
        return {
          ...state,
          tasks: tasksCopy,
        };
      } else {
        return {
          ...state,
        };
      }

    case TasksActionTypes.RENAME_TASK: {
      const copy = state.tasks;
      copy[action.indexOfTask][action.indexOfSubtask] = action.value.trim();
      return {
        ...state,
        tasks: copy,
      };
    }

    case TasksActionTypes.REMOVE_TASK: {
      const allTasks = state.tasks;
      const listTasks = state.tasks[action.indexOfTask];
      if (action.indexOfSubtask >= 0) {
        listTasks.splice(action.indexOfSubtask, 1);
        allTasks[action.indexOfTask] = listTasks;
      }
      return {
        ...state,
        tasks: allTasks,
      };
    }

    case TasksActionTypes.DRAG_DROP_LIST_WITH_TASK: {
      const tasksC = state.tasks;
      const draggingList = tasksC.splice(action.indexFrom, 1)[0];
      tasksC.splice(action.indexTo, 0, draggingList);
      return {
        ...state,
        tasks: tasksC,
      };
    }

    case TasksActionTypes.DRAG_DROP_TASKS: {
      const taskFrom = state.tasks[action.taskFrom];
      const copyOfTasks = state.tasks;
      if (
        action.indexFrom >= 0 &&
        action.indexTo >= 0 &&
        action.taskFrom >= 0 &&
        action.taskTo >= 0
      ) {
        const taskTo = copyOfTasks[action.taskTo];
        const draggingTask = taskFrom.splice(action.indexFrom, 1)[0];
        taskTo.splice(action.indexTo, 0, draggingTask);
        copyOfTasks[action.taskFrom] = taskFrom;
        copyOfTasks[action.taskTo] = taskTo;
      }
      return {
        ...state,
        tasks: copyOfTasks,
      };
    }

    case TasksActionTypes.REMOVE_ALL_TASKS_FROM_LIST: {
      const copyTasks = state.tasks;
      if (action.indexOfTask >= 0) {
        copyTasks.splice(action.indexOfTask, 1);
      }
      return {
        ...state,
        tasks: copyTasks,
      };
    }

    case TasksActionTypes.ADD_TASK_ARRAY_TO_NEWLIST: {
      const { tasks } = state;
      if (state.tasks[action.taskIndex] === undefined) {
        let numberOfLists = action.taskIndex + 1 - state.tasks.length;
        while (numberOfLists !== 0) {
          tasks.push([]);
          numberOfLists -= 1;
        }
      }
      return {
        ...state,
        tasks,
      };
    }

    default:
      return state;
  }
};
