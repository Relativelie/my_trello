import { ListOfTasksAction, ListOfTasksActionTypes, ListOfTasksState } from "../../types/listOfTasksTypes"


const initialState: ListOfTasksState = {
    lists: [["Write the name of the project"]],
    isOpenEditListName: false
};

export const listOfTasksReducer = (state = initialState, action: ListOfTasksAction): ListOfTasksState => {
    switch (action.type) {
        case ListOfTasksActionTypes.ADD_NEW_LIST:
            return {
                ...state,
                lists: [
                    ...state.lists,
                    ["Write the name of the project"]
                ]
            }

        case ListOfTasksActionTypes.RENAME_LIST:
            const allLists = state.lists;
            allLists[action.index] = action.name
            return {
                ...state,
                lists: allLists
            }
        
        case ListOfTasksActionTypes.REMOVE_LIST:
            const copy = state.lists;
            copy.splice(action.indexOfList, 1)
            return {
                ...state,
                lists: copy
            }


        default:
            return state
    }
}