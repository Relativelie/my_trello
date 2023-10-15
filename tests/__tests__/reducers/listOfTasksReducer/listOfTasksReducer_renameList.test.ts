import { renameList } from "../../../../src/store/actions/listOfTasksActions";
import { listOfTasksReducer } from "../../../../src/store/reducers/listOfTasksReducer";
import { ListOfTasksState } from "../../../../src/types/listOfTasksTypes";

let oneListState: ListOfTasksState;
let fourListState: ListOfTasksState;

beforeEach(() => {
  oneListState = {
    lists: ["Write the name of the project"],
  };

  fourListState = {
    lists: [
      "Write the name of the project",
      "Write the name of the project",
      "Write the name of the project",
      "Write the name of the project",
    ],
  };
});

describe("list of tasks reducer - rename list", () => {
  test("rename list - string value(eng)", () => {
    const name = "tyty";
    const index = 0;
    const newState = listOfTasksReducer(oneListState, renameList(name, index));
    expect(newState).toStrictEqual({
      ...oneListState,
      lists: ["tyty"],
    });
  });

  test("rename list - string value(rus)", () => {
    const name = "ено";
    const index = 3;
    const newState = listOfTasksReducer(fourListState, renameList(name, index));
    expect(newState).toStrictEqual({
      ...fourListState,
      lists: [
        "Write the name of the project",
        "Write the name of the project",
        "Write the name of the project",
        "ено",
      ],
    });
  });

  test("rename list - string value(eng+rus)", () => {
    const name = "io ено";
    const index = 1;
    const newState = listOfTasksReducer(fourListState, renameList(name, index));
    expect(newState).toStrictEqual({
      ...fourListState,
      lists: [
        "Write the name of the project",
        "io ено",
        "Write the name of the project",
        "Write the name of the project",
      ],
    });
  });

  test("rename list - int value", () => {
    const name = "123";
    const index = 2;
    const newState = listOfTasksReducer(fourListState, renameList(name, index));
    expect(newState).toStrictEqual({
      ...fourListState,
      lists: [
        "Write the name of the project",
        "Write the name of the project",
        "123",
        "Write the name of the project",
      ],
    });
  });

  test("rename list - symbols", () => {
    const name = "!@#$%^&*()";
    const index = 0;
    const newState = listOfTasksReducer(oneListState, renameList(name, index));
    expect(newState).toStrictEqual({
      ...oneListState,
      lists: ["!@#$%^&*()"],
    });
  });
});
