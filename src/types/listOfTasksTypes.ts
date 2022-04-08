export interface ListOfTasksState {
    lists: any,
    isOpenEditListName: boolean
}

export enum ListOfTasksActionTypes {
    ADD_NEW_LIST = "ADD_NEW_LIST",
    RENAME_LIST = "RENAME_LIST",
    REMOVE_LIST = "REMOVE_LIST",
}

interface addNewList {
    type: ListOfTasksActionTypes.ADD_NEW_LIST
}

interface renameList {
    type: ListOfTasksActionTypes.RENAME_LIST,
    name: string,
    index: number
}

interface removeList {
    type: ListOfTasksActionTypes.REMOVE_LIST,
    indexOfList: number
}

export type ListOfTasksAction =
    addNewList
    | renameList
    | removeList