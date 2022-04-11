import { addTaskArrayToNewList } from "../../../src/store/actions/tasksActions";
import { tasksReducer } from "../../../src/store/reducers/tasksReducer";
import { TasksState } from "../../../src/types/tasksTypes";

let emptyTasksState: TasksState;
let nonEmptyTasksState: TasksState;


beforeEach(() => {
    emptyTasksState = {
        tasks: []
    },
        nonEmptyTasksState = {
            tasks: [
                ["effd"],
                []
            ]
        }
});


describe("tasks reducer - add task array to new list", () => {
    test("add a first new list", () => {
        const listIndex = 0;

        const newState = tasksReducer(emptyTasksState,
            addTaskArrayToNewList(listIndex));
        expect(newState).toStrictEqual({
            tasks: [
                []
            ]
        })
    });


    test("add a third new list", () => {
        const listIndex = 2;

        const newState = tasksReducer(nonEmptyTasksState,
            addTaskArrayToNewList(listIndex));
        expect(newState).toStrictEqual({
            tasks: [
                ["effd"],
                [],
                []
            ]
        })
    });
})