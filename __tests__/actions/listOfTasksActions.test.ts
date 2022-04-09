import { addNewList, dragDropList, removeList, renameList } from "../../src/store/actions/listOfTasksActions";
import { ListOfTasksActionTypes } from "../../src/types/listOfTasksTypes";

describe("list of tasks actions", () => {
    test("action to add new list", () => {
        expect(addNewList()).toEqual({
            type: ListOfTasksActionTypes.ADD_NEW_LIST
        })
    });

    test("action to rename list", () => {
        const name = "list name";
        const index = 1;
        expect(renameList(name, index)).toEqual({
            type: ListOfTasksActionTypes.RENAME_LIST,
            name,
            index
        })
    });

    test("action to remove list", () => {
        const index = 1;
        expect(removeList(index)).toEqual({
            type: ListOfTasksActionTypes.REMOVE_LIST,
            indexOfList: index
        })
    });

    test("action to drag and drop list", () => {
        const indexFrom = 1;
        const indexTo = 0;
        expect(dragDropList(indexTo, indexFrom)).toEqual({
            type: ListOfTasksActionTypes.DRAG_DROP_LIST,
            indexTo,
            indexFrom
        })
    })
})