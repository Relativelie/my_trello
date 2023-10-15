import { removeList } from "../../../../src/store/actions/listOfTasksActions";
import { listOfTasksReducer } from "../../../../src/store/reducers/listOfTasksReducer";
import { ListOfTasksState } from "../../../../src/types/listOfTasksTypes";

let oneListState: ListOfTasksState;
let fiveListState: ListOfTasksState;

beforeEach(() => {
  oneListState = {
    lists: ["Write the name of the project"],
  };

  fiveListState = {
    lists: ["123m", "456g", "789f", "101112r", "101112oiiu"],
  };
});

describe("list of tasks reducer - remove list", () => {
  test("remove list - remove first elem included in the list with one elem", () => {
    const index = 0;
    const newState = listOfTasksReducer(oneListState, removeList(index));
    expect(newState).toStrictEqual({
      ...oneListState,
      lists: [],
    });
  });

  test("remove list - remove last elem", () => {
    const index = 4;
    const newState = listOfTasksReducer(fiveListState, removeList(index));
    expect(newState).toStrictEqual({
      ...fiveListState,
      lists: ["123m", "456g", "789f", "101112r"],
    });
  });

  test("remove list - remove middle elem", () => {
    const index = 2;
    const newState = listOfTasksReducer(fiveListState, removeList(index));
    expect(newState).toStrictEqual({
      ...fiveListState,
      lists: ["123m", "456g", "101112r", "101112oiiu"],
    });
  });

  test("remove list - remove non-existent list", () => {
    const index = 7;
    const newState = listOfTasksReducer(fiveListState, removeList(index));
    expect(newState).toStrictEqual({
      ...fiveListState,
      lists: ["123m", "456g", "789f", "101112r", "101112oiiu"],
    });
  });

  test("remove list - remove list with negative number", () => {
    const index = -7;
    const newState = listOfTasksReducer(fiveListState, removeList(index));
    expect(newState).toStrictEqual({
      ...fiveListState,
    });
  });
});
