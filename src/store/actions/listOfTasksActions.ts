import { ListOfTasksAction, ListOfTasksActionTypes } from "../../types/listOfTasksTypes";


export const addNewList = (): ListOfTasksAction => ({
    type: ListOfTasksActionTypes.ADD_NEW_LIST
});

export const renameList = (name: string, index: number): ListOfTasksAction => ({
    type: ListOfTasksActionTypes.RENAME_LIST,
    name,
    index
});

export const removeList = (indexOfList: number) => ({
    type: ListOfTasksActionTypes.REMOVE_LIST,
    indexOfList
});

export const dragDropList = (indexTo: number, indexFrom: number) :ListOfTasksAction => ({
    type: ListOfTasksActionTypes.DRAG_DROP_LIST,
    indexTo,
    indexFrom
});