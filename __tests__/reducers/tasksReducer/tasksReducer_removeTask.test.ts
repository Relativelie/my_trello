import { removeTask } from "../../../src/store/actions/tasksActions";
import { tasksReducer } from "../../../src/store/reducers/tasksReducer";
import { TasksState } from "../../../src/types/tasksTypes";

let nonEmptyTasksState: TasksState

beforeEach(() => {
    nonEmptyTasksState = {
        tasks: [
            ["24", "fvf"],
            ["123", "rty", "йцу"],
            ["dfv"]
        ]
    }
});


describe("tasks reducer - remove task", () => {
    test("remove first task", () => {
        const listIndex = 1;
        const taskIndex = 0;
        const newState = tasksReducer(nonEmptyTasksState,
            removeTask(listIndex, taskIndex));

        expect(newState).toStrictEqual({
            tasks: [
                ["24", "fvf"],
                ["rty", "йцу"],
                ["dfv"]
            ]
        })
    });

    test("remove non-existent task", () => {
        const listIndex = 0;
        const taskIndex = 4;
        const newState = tasksReducer(nonEmptyTasksState,
            removeTask(listIndex, taskIndex));

        expect(newState).toStrictEqual({
            ...nonEmptyTasksState
        })
    });

    test("remove task with negative index", () => {
        const listIndex = 0;
        const taskIndex = -1;
        const newState = tasksReducer(nonEmptyTasksState,
            removeTask(listIndex, taskIndex));

        expect(newState).toStrictEqual({
            ...nonEmptyTasksState
        })
    });
})