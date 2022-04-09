export interface InputFieldState {
    isCorrectListName: boolean,
    isCorrectTaskName: boolean,
    newName: string | null,
    indexOfRenamedElem: Array<string>,
    currentName: string,
}

export enum InputFieldActionTypes {
    TURN_ON_NAME_VALIDATION = "TURN_ON_NAME_VALIDATION",
    SAVE_PREV_NAME = "SAVE_PREV_NAME",
    TURN_OFF_NAME_VALIDATION = "TURN_OFF_NAME_VALIDATION",
    INPUT_VALUE = "INPUT_VALUE",
    SHOW_CURRENT_VALUE_IN_INPUT = "SHOW_CURRENT_VALUE_IN_INPUT"
}

interface nameValidationOn {
    type: InputFieldActionTypes.TURN_ON_NAME_VALIDATION,
    nameValue: string,
    index: Array<string>,
    typeOfElement: string
}

interface nameValidationOff {
    type: InputFieldActionTypes.TURN_OFF_NAME_VALIDATION,
    typeOfElement: string
}

interface inputValue {
    type: InputFieldActionTypes.INPUT_VALUE,
    value: string
}

interface showCurrentValueInInput {
    type: InputFieldActionTypes.SHOW_CURRENT_VALUE_IN_INPUT,
    value: string
}

export type InputFieldAction =
    nameValidationOn
    | nameValidationOff
    | inputValue
    | showCurrentValueInInput