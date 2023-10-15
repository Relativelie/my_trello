export interface ListOfTasksState {
  lists: Array<string>;
}

export enum ListOfTasksActionTypes {
  ADD_NEW_LIST = 'ADD_NEW_LIST',
  RENAME_LIST = 'RENAME_LIST',
  REMOVE_LIST = 'REMOVE_LIST',
  DRAG_DROP_LIST = 'DRAG_DROP_LIST',
}

interface AddNewList {
  type: ListOfTasksActionTypes.ADD_NEW_LIST;
}

interface RenameList {
  type: ListOfTasksActionTypes.RENAME_LIST;
  name: string;
  index: number;
}

interface RemoveList {
  type: ListOfTasksActionTypes.REMOVE_LIST;
  indexOfList: number;
}

interface DragDropList {
  type: ListOfTasksActionTypes.DRAG_DROP_LIST;
  indexTo: number;
  indexFrom: number;
}
export type ListOfTasksAction =
  | AddNewList
  | RenameList
  | RemoveList
  | DragDropList;
