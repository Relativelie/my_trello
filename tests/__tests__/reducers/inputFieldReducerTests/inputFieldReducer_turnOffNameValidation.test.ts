import { nameValidationOff } from "../../../../src/store/actions/inputFieldActions";
import { inputFieldReducer } from "../../../../src/store/reducers/inputFieldReducer";
import { InputFieldState } from "../../../../src/types/inputFieldTypes";

let listState: InputFieldState;
let taskState: InputFieldState;

beforeEach(() => {
  taskState = {
    isCorrectListName: false,
    isCorrectTaskName: true,
    newName: "456 ff",
    indexOfRenamedElem: ["9", "0"],
    currentName: "fhfhk 677при",
  };

  listState = {
    isCorrectListName: true,
    isCorrectTaskName: false,
    newName: "456 ff",
    indexOfRenamedElem: ["9"],
    currentName: "fhfhk 677при",
  };
});

describe("input field reducer - turn off name validation", () => {
  test("turn off name validation for task", () => {
    const newState = inputFieldReducer(taskState, nameValidationOff("task"));
    expect(newState).toStrictEqual({
      ...taskState,
      currentName: "",
      isCorrectTaskName: false,
      indexOfRenamedElem: [],
      newName: null,
    });
  });

  test("turn off name validation for list", () => {
    const newState = inputFieldReducer(listState, nameValidationOff("list"));
    expect(newState).toStrictEqual({
      ...listState,
      currentName: "",
      isCorrectListName: false,
      indexOfRenamedElem: [],
      newName: null,
    });
  });

  test("turn off name validation for not list and not task", () => {
    const newState = inputFieldReducer(listState, nameValidationOff("ffff"));
    expect(newState).toStrictEqual({
      ...listState,
    });
  });
});
