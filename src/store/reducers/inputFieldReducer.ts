import {
  InputFieldActionTypes,
  InputFieldState,
  InputFieldAction,
} from '../../types/inputFieldTypes';

const initialState: InputFieldState = {
  isCorrectListName: false,
  isCorrectTaskName: false,
  newName: null,
  indexOfRenamedElem: [],
  currentName: '',
};

// eslint-disable-next-line max-len
export const inputFieldReducer = (
  state = initialState,
  action: InputFieldAction,
): InputFieldState => {
  switch (action.type) {
    case InputFieldActionTypes.TURN_ON_NAME_VALIDATION: {
      const current = action.nameValue.trim();
      const checkToCorrect = current !== '';
      const newNameValue = checkToCorrect ? current : '';
      if (checkToCorrect === false) {
        return {
          ...state,
        };
      } else if (action.typeOfElement === 'task') {
        return {
          ...state,
          isCorrectListName: true,
          newName: newNameValue,
          indexOfRenamedElem: action.index,
        };
      } else {
        return {
          ...state,
          isCorrectTaskName: true,
          newName: newNameValue,
          indexOfRenamedElem: action.index,
        };
      }
    }

    case InputFieldActionTypes.TURN_OFF_NAME_VALIDATION:
      if (action.typeOfElement === 'subtask') {
        return {
          ...state,
          currentName: '',
          isCorrectTaskName: false,
          indexOfRenamedElem: [],
          newName: null,
        };
      } else if (action.typeOfElement === 'task') {
        return {
          ...state,
          currentName: '',
          isCorrectListName: false,
          indexOfRenamedElem: [],
          newName: null,
        };
      } else {
        return {
          ...state,
        };
      }

    case InputFieldActionTypes.SHOW_CURRENT_VALUE_IN_INPUT:
      return {
        ...state,
        currentName: action.value,
      };

    default:
      return state;
  }
};
