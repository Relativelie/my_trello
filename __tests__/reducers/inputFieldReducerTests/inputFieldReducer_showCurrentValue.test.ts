import { showCurrentValueInInput } from "../../../src/store/actions/inputFieldActions";
import { inputFieldReducer } from "../../../src/store/reducers/inputFieldReducer";
import { InputFieldState } from "../../../src/types/inputFieldTypes";


let inputFieldState: InputFieldState

beforeEach(() => {
    inputFieldState = {
        isCorrectListName: false,
        isCorrectTaskName: false,
        newName: null,
        indexOfRenamedElem: [],
        currentName: "",
    };
})

describe("input field reducer - input value to input field", () => {
    test("show Current Value In Input", () => {
        const newState = inputFieldReducer(inputFieldState,
            showCurrentValueInInput(
                "task"
            ));
        expect(newState).toStrictEqual({
            ...inputFieldState,
            currentName: "task"
        })
    });
})