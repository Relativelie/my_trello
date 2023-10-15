import {
  InputFieldActionTypes,
  InputFieldAction,
} from '../../types/inputFieldTypes';

// eslint-disable-next-line max-len
export const nameValidationOn = (
  nameValue: string,
  index: string[],
  typeOfElement: string,
): InputFieldAction => ({
  type: InputFieldActionTypes.TURN_ON_NAME_VALIDATION,
  nameValue,
  index,
  typeOfElement,
});

export const nameValidationOff = (typeOfElement: string): InputFieldAction => ({
  type: InputFieldActionTypes.TURN_OFF_NAME_VALIDATION,
  typeOfElement,
});

export const showCurrentValueInInput = (value: string): InputFieldAction => ({
  type: InputFieldActionTypes.SHOW_CURRENT_VALUE_IN_INPUT,
  value,
});
