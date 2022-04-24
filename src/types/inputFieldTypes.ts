export interface InputFieldState {
    isCorrectListName: boolean,
    isCorrectTaskName: boolean,
    newName: string | null,
    indexOfRenamedElem: Array<string>,
    currentName: string,
}

export enum InputFieldActionTypes {
    TURN_ON_NAME_VALIDATION = 'TURN_ON_NAME_VALIDATION',
    SAVE_PREV_NAME = 'SAVE_PREV_NAME',
    TURN_OFF_NAME_VALIDATION = 'TURN_OFF_NAME_VALIDATION',
    SHOW_CURRENT_VALUE_IN_INPUT = 'SHOW_CURRENT_VALUE_IN_INPUT',
}

interface NameValidationOn {
    type: InputFieldActionTypes.TURN_ON_NAME_VALIDATION,
    nameValue: string,
    index: Array<string>,
    typeOfElement: string
}

interface NameValidationOff {
    type: InputFieldActionTypes.TURN_OFF_NAME_VALIDATION,
    typeOfElement: string
}

interface ShowCurrentValueInInput {
    type: InputFieldActionTypes.SHOW_CURRENT_VALUE_IN_INPUT,
    value: string
}

export type InputFieldAction =
    NameValidationOn
    | NameValidationOff
    | ShowCurrentValueInInput;
