import { CommonAction, CommonActionTypes, CommonState } from "../../types/commonTypes";

const initialState: CommonState = {
    isCorrectListName: false,
    isCorrectTaskName: false,
    previousName: null,
    newName: null,
    indexOfRenamedElem: [],
    currentName: "",
}

export const commonReducer = (state = initialState, action: CommonAction): CommonState => {
    switch (action.type) {
        case CommonActionTypes.TURN_ON_NAME_VALIDATION:
            const currentName = action.nameValue.trim();
            const checkToCorrect = currentName !== "" ? true : false;
            const newNameValue = checkToCorrect ? currentName : "";
            if(checkToCorrect == false ) {
                return {
                    ...state
                }
            }
            else {
                if (action.typeOfElement === "list") {
                    return {
                        ...state,
                        ...state,
                        isCorrectListName: true,
                        newName: newNameValue,
                        indexOfRenamedElem: action.index
                    }
                }
                else {
                    return {
                        ...state,
                        ...state,
                        isCorrectTaskName: true,
                        newName: newNameValue,
                        indexOfRenamedElem: action.index
                    }
                }
                
            }

        case CommonActionTypes.SAVE_PREV_NAME:
            return {
                ...state,
                previousName: action.nameValue
            }

        case CommonActionTypes.TURN_OFF_NAME_VALIDATION:
            if(action.typeOfElement=== "task") {
                return {
                    ...state,
                    currentName: "",
                    isCorrectTaskName: false,
                    indexOfRenamedElem: [],
                }
            }
            else {
                return {
                    ...state,
                    currentName: "",
                    isCorrectListName: false,
                    indexOfRenamedElem: [],
                    newName: null
                }
            }

        case CommonActionTypes.INPUT_VALUE:
            return {
                ...state,
                currentName: action.value
            }
        
        case CommonActionTypes.SHOW_CURRENT_VALUE_IN_INPUT:
            return {
                ...state, 
                currentName: action.value
            }
            
        default:
            return state
    }
}