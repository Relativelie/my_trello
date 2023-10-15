import { removeAllTasksFromList } from "../../../../src/store/actions/tasksActions";
import { tasksReducer } from "../../../../src/store/reducers/tasksReducer";
import { TasksState } from "../../../../src/types/tasksTypes";

let nonEmptyTasksState: TasksState;

beforeEach(() => {
  nonEmptyTasksState = {
    tasks: [["24", "fvf"], ["123", "scвс", "йцу"], ["dfv"]],
  };
});

describe("tasks reducer - remove all tasks from list", () => {
  test("remove first tasks from first list", () => {
    const listIndex = 0;

    const newState = tasksReducer(
      nonEmptyTasksState,
      removeAllTasksFromList(listIndex),
    );
    expect(newState).toStrictEqual({
      tasks: [["123", "scвс", "йцу"], ["dfv"]],
    });
  });

  test("remove first tasks from last list", () => {
    const listIndex = 2;

    const newState = tasksReducer(
      nonEmptyTasksState,
      removeAllTasksFromList(listIndex),
    );
    expect(newState).toStrictEqual({
      tasks: [
        ["24", "fvf"],
        ["123", "scвс", "йцу"],
      ],
    });
  });

  test("remove first tasks from non-existent list", () => {
    const listIndex = 5;

    const newState = tasksReducer(
      nonEmptyTasksState,
      removeAllTasksFromList(listIndex),
    );
    expect(newState).toStrictEqual({
      ...nonEmptyTasksState,
    });
  });

  test("remove negative index of list", () => {
    const listIndex = -1;

    const newState = tasksReducer(
      nonEmptyTasksState,
      removeAllTasksFromList(listIndex),
    );
    expect(newState).toStrictEqual({
      ...nonEmptyTasksState,
    });
  });
});
