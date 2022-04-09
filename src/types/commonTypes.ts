export interface CommonState {
    isCorrectListName: boolean,
    isCorrectTaskName: boolean,
    previousName: string | null,
    newName: string | null,
    indexOfRenamedElem: Array<string>,
    currentName: string,
}

export enum CommonActionTypes {
    TURN_ON_NAME_VALIDATION = "TURN_ON_NAME_VALIDATION",
    SAVE_PREV_NAME = "SAVE_PREV_NAME",
    TURN_OFF_NAME_VALIDATION = "TURN_OFF_NAME_VALIDATION",
    INPUT_VALUE = "INPUT_VALUE",
    SHOW_CURRENT_VALUE_IN_INPUT = "SHOW_CURRENT_VALUE_IN_INPUT"
}


interface savePreviousName {
    type: CommonActionTypes.SAVE_PREV_NAME,
    nameValue: string
}

interface nameValidationOn {
    type: CommonActionTypes.TURN_ON_NAME_VALIDATION,
    nameValue: string,
    index: Array<string>,
    typeOfElement: string
}

interface nameValidationOff {
    type: CommonActionTypes.TURN_OFF_NAME_VALIDATION,
    typeOfElement: string
}

interface inputValue {
    type: CommonActionTypes.INPUT_VALUE,
    value: string
}

interface showCurrentValueInInput {
    type: CommonActionTypes.SHOW_CURRENT_VALUE_IN_INPUT,
    value: string
}

export type CommonAction =
    nameValidationOn
    | nameValidationOff
    | savePreviousName
    | inputValue
    | showCurrentValueInInput