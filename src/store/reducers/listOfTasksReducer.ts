import { ListOfTasksAction, ListOfTasksActionTypes, ListOfTasksState } from '../../types/listOfTasksTypes';

const initialState: ListOfTasksState = {
    lists: [],
};

// eslint-disable-next-line max-len
export const listOfTasksReducer = (state = initialState, action: ListOfTasksAction): ListOfTasksState => {
    switch (action.type) {
        case ListOfTasksActionTypes.ADD_NEW_LIST:
            return {
                ...state,
                lists: [
                    ...state.lists,
                    'Write the name of the project',
                ],
            };

        case ListOfTasksActionTypes.RENAME_LIST: {
            const allLists = state.lists;
            allLists[action.index] = action.name;
            return {
                ...state,
                lists: allLists,
            };
        }

        case ListOfTasksActionTypes.REMOVE_LIST: {
            const copy = state.lists;
            if (action.indexOfList >= 0) {
                copy.splice(action.indexOfList, 1);
            }
            return {
                ...state,
                lists: copy,
            };
        }

        case ListOfTasksActionTypes.DRAG_DROP_LIST: {
            const copyState = state.lists;
            if (action.indexFrom >= 0 || action.indexTo >= 0) {
                const draggingList = (copyState.splice(action.indexFrom, 1)).toString();
                copyState.splice(action.indexTo, 0, draggingList);
            }

            return {
                ...state,
                lists: copyState,

            };
        }
        default:
            return state;
    }
};
