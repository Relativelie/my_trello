import { ListOfTasksAction, ListOfTasksActionTypes } from "../../types/listOfTasksTypes";

export const addNewList = (): ListOfTasksAction => ({
    type: ListOfTasksActionTypes.ADD_NEW_LIST
})

export const renameList = (name: string, index: number): ListOfTasksAction => ({
    type: ListOfTasksActionTypes.RENAME_LIST,
    name,
    index
})

export const archiveList = (indexOfList: number) => ({
    type: ListOfTasksActionTypes.ARCHIVE_LIST,
    indexOfList
})