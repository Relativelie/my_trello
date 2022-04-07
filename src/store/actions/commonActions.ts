import { CommonAction, CommonActionTypes } from "../../types/commonTypes";

export const nameValidationOn = (nameValue: string, index: any, typeOfElement: string): CommonAction => ({
    type: CommonActionTypes.TURN_ON_NAME_VALIDATION,
    nameValue,
    index,
    typeOfElement
})

export const nameValidationOff = (typeOfElement: string): CommonAction => ({
    type: CommonActionTypes.TURN_OFF_NAME_VALIDATION,
    typeOfElement
})

export const savePreviousName = (name: string): CommonAction => ({
    type: CommonActionTypes.SAVE_PREV_NAME,
    nameValue: name
})

export const inputValue = (value: any): CommonAction => ({
    type: CommonActionTypes.INPUT_VALUE,
    value
})

export const showCurrentValueInInput = (value: string): CommonAction=> ({
    type: CommonActionTypes.SHOW_CURRENT_VALUE_IN_INPUT,
    value
})