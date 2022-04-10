import { nameValidationOff, nameValidationOn, showCurrentValueInInput } from "../../src/store/actions/inputFieldActions";
import { InputFieldActionTypes } from "../../src/types/inputFieldTypes";



describe("input field actions", () => {
    test("action to verify value from input field", () => {
        const name = "nameValue";
        const numberOfIndex = ["1", "1"];
        const type = "task";
        expect(nameValidationOn(name, numberOfIndex, type)).toEqual({
            type: InputFieldActionTypes.TURN_ON_NAME_VALIDATION,
            nameValue: name,
            index: numberOfIndex,
            typeOfElement: type
        })
    });

    test("action to turn off validation input field", () => {
        const type = "list";
        expect(nameValidationOff(type)).toEqual({
            type: InputFieldActionTypes.TURN_OFF_NAME_VALIDATION,
            typeOfElement: type
        })
    });

    test("action to show current value in input field when input on focus", () => {
        const value = "value";
        expect(showCurrentValueInInput(value)).toEqual({
            type: InputFieldActionTypes.SHOW_CURRENT_VALUE_IN_INPUT,
            value
        })
    })
})

