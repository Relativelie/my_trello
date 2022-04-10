import { nameValidationOn } from "../../../src/store/actions/inputFieldActions";
import { inputFieldReducer } from "../../../src/store/reducers/inputFieldReducer";
import { InputFieldState } from "../../../src/types/inputFieldTypes";


let testState: InputFieldState

beforeEach(() => {
    testState = {
        isCorrectListName: false,
        isCorrectTaskName: false,
        newName: null,
        indexOfRenamedElem: [],
        currentName: "",
    };
});


describe("input field reducer - turn on name validation", () => {
    test("entered task name is correct", () => {
        const newState = inputFieldReducer(testState,
            nameValidationOn(
                "nana нана 123!@#$%^&*()",
                ["0", "1"],
                "task"
            ));
        expect(newState).toStrictEqual({
            ...testState,
            isCorrectTaskName: true,
            newName: "nana нана 123!@#$%^&*()",
            indexOfRenamedElem: ["0", "1"]
        })
    });

    test("entered task name is incorrect", () => {
        const newState = inputFieldReducer(testState,
            nameValidationOn(
                "",
                ["0", "1"],
                "task"
            ));
        expect(newState).toStrictEqual({
            ...testState
        })
    });

    test("entered task name is incorrect(consist of only spaces)", () => {
        const newState = inputFieldReducer(testState,
            nameValidationOn(
                "     ",
                ["0", "1"],
                "task"
            ));
        expect(newState).toStrictEqual({
            ...testState
        })
    });

    test("entered list name is correct", () => {
        const newState = inputFieldReducer(testState,
            nameValidationOn(
                " !@#$%^&*()кеу fgj123 ",
                ["0"],
                "list"
            ));
        expect(newState).toStrictEqual({
            ...testState,
            isCorrectListName: true,
            newName: "!@#$%^&*()кеу fgj123",
            indexOfRenamedElem: ["0"]
        })
    });

    test("entered list name is incorrect", () => {
        const newState = inputFieldReducer(testState,
            nameValidationOn(
                "",
                ["0"],
                "list"
            ));
        expect(newState).toStrictEqual({
            ...testState
        })
    });


    test("entered list name is incorrect(consist of only spaces)", () => {
        const newState = inputFieldReducer(testState,
            nameValidationOn(
                "    ",
                ["0"],
                "list"
            ));
        expect(newState).toStrictEqual({
            ...testState
        })
    });

    
})