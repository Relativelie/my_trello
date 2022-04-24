import {
    addTask,
    addTaskArrayToNewList,
    dragDropListWithTasks,
    dragDropTasks,
    removeAllTasksFromList,
    removeTask,
    renameTask,
} from '../../src/store/actions/tasksActions';
import { TasksActionTypes } from '../../src/types/tasksTypes';

describe('tasks actions', () => {
    test('action to remove task', () => {
        const listIndex = 1;
        const taskIndex = 0;

        expect(removeTask(listIndex, taskIndex)).toEqual({
            type: TasksActionTypes.REMOVE_TASK,
            indexOfList: listIndex,
            indexOfTask: taskIndex,
        });
    });

    test('action to add task', () => {
        const name = 'mama e';
        const listIndex = 0;

        expect(addTask(name, listIndex)).toEqual({
            type: TasksActionTypes.ADD_NEW_TASK,
            name,
            indexOfList: listIndex,
        });
    });

    test('action to rename task', () => {
        const listIndex = 2;
        const taskIndex = 1;
        const name = 'bla bla';

        expect(renameTask(listIndex, taskIndex, name)).toEqual({
            type: TasksActionTypes.RENAME_TASK,
            indexOfList: listIndex,
            indexOfTask: taskIndex,
            value: name,
        });
    });

    test('action to drag and drop list with all its tasks', () => {
        const indexTo = 3;
        const indexFrom = 0;

        expect(dragDropListWithTasks(indexTo, indexFrom)).toEqual({
            type: TasksActionTypes.DRAG_DROP_LIST_WITH_TASK,
            indexTo,
            indexFrom,
        });
    });

    test('action to drag and drop only tasks', () => {
        const indexListTo = 3;
        const indexListFrom = 0;
        const indexTaskTo = 0;
        const indexTaskFrom = 5;

        expect(dragDropTasks(indexListTo, indexListFrom, indexTaskTo, indexTaskFrom)).toEqual({
            type: TasksActionTypes.DRAG_DROP_TASKS,
            listTo: indexListTo,
            listFrom: indexListFrom,
            indexTo: indexTaskTo,
            indexFrom: indexTaskFrom,
        });
    });

    test('action to remove all tasks from list', () => {
        const index = 2;

        expect(removeAllTasksFromList(index)).toEqual({
            type: TasksActionTypes.REMOVE_ALL_TASKS_FROM_LIST,
            indexOfList: index,
        });
    });

    test('action to add task array to a new list', () => {
        const index = 2;

        expect(addTaskArrayToNewList(index)).toEqual({
            type: TasksActionTypes.ADD_TASK_ARRAY_TO_NEWLIST,
            listIndex: index,
        });
    });
});
