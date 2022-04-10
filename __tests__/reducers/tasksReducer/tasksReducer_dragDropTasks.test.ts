import { dragDropTasks } from "../../../src/store/actions/tasksActions";
import { tasksReducer } from "../../../src/store/reducers/tasksReducer";
import { TasksState } from "../../../src/types/tasksTypes";

let nonEmptyTasksState: TasksState;


beforeEach(() => {
    nonEmptyTasksState = {
        tasks: [
            ["24", "fvf"],
            ["123", "scвс", "йцу"],
            ["dfv"]
        ]
    }
});


describe("tasks reducer - drag and drop tasks", () => {
    test("dnd list to < list from", () => {
        const listTo = 1;
        const listFrom = 2;
        const taskTo = 1;
        const taskFrom = 0;

        const newState = tasksReducer(nonEmptyTasksState,
            dragDropTasks(listTo, listFrom, taskTo, taskFrom));

        expect(newState).toStrictEqual({
            tasks: [
                ["24", "fvf"],
                ["123", "dfv", "scвс", "йцу"],
                []
            ]
        })
    });

    test("dnd list to > list from", () => {
        const listTo = 2;
        const listFrom = 0;
        const taskTo = 0;
        const taskFrom = 1;

        const newState = tasksReducer(nonEmptyTasksState,
            dragDropTasks(listTo, listFrom, taskTo, taskFrom));

        expect(newState).toStrictEqual({
            tasks: [
                ["24"],
                ["123", "scвс", "йцу"],
                ["fvf", "dfv"]
            ]
        })
    });

    test("dnd task to < task from", () => {
        const listTo = 2;
        const listFrom = 0;
        const taskTo = 0;
        const taskFrom = 1;

        const newState = tasksReducer(nonEmptyTasksState,
            dragDropTasks(listTo, listFrom, taskTo, taskFrom));

        expect(newState).toStrictEqual({
            tasks: [
                ["24"],
                ["123", "scвс", "йцу"],
                ["fvf", "dfv"]
            ]
        })
    });

    test("dnd list to < 0", () => {
        const listTo = -2;
        const listFrom = 0;
        const taskTo = 0;
        const taskFrom = 1;

        const newState = tasksReducer(nonEmptyTasksState,
            dragDropTasks(listTo, listFrom, taskTo, taskFrom));

        expect(newState).toStrictEqual({
            ...nonEmptyTasksState
        })
    });

    test("dnd list from < 0", () => {
        const listTo = 2;
        const listFrom = 0;
        const taskTo = 0;
        const taskFrom = -1;

        const newState = tasksReducer(nonEmptyTasksState,
            dragDropTasks(listTo, listFrom, taskTo, taskFrom));

        expect(newState).toStrictEqual({
            ...nonEmptyTasksState
        })
    });
})