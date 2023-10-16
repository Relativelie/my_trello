import { SyntheticEvent, FocusEvent } from 'react';

import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';

import './index.scss';

interface NameInputFieldProps {
  index: number[] | number;
  typeOfElement: string;
  value: string;
}

const NameInputField: React.FC<NameInputFieldProps> = ({
  index,
  typeOfElement,
  value,
}) => {
  const { nameValidationOn, showCurrentValueInInput } = useActions();
  const { lists } = useTypedSelector((state) => state.listOfTasksReducer);
  const { currentName } = useTypedSelector(
    (inputFieldState) => inputFieldState.inputFieldReducer,
  );

  const validateInputValue = (
    eventType: string,
    blurEvent: SyntheticEvent<EventTarget>,
  ) => {
    if (eventType === 'blur' || eventType === 'Enter') {
      const elem = blurEvent.target as HTMLInputElement;
      const inputValue = elem.defaultValue;
      const indexElem = elem?.dataset?.elemkey?.split(',');
      if (indexElem !== undefined) {
        nameValidationOn(inputValue, indexElem, typeOfElement);
      }
      elem.classList.add('inputContainer__inputName_hideInput');
      elem.blur();
    }
  };

  const showInput = (e: FocusEvent<HTMLInputElement>) => {
    let inputValue;
    if (typeof index === 'number') {
      inputValue = lists[index];
    } else inputValue = value;
    showCurrentValueInInput(inputValue);
    e.target.classList.remove('inputContainer__inputName_hideInput');
  };

  return (
    <div className="inputContainer">
      <input
        aria-label={`add new ${typeOfElement}`}
        data-elemkey={index}
        className="inputContainer__inputName inputContainer__inputName_hideInput"
        type="text"
        maxLength={44}
        onKeyPress={(blurEvent) => {
          validateInputValue(blurEvent.key, blurEvent);
        }}
        onBlur={(blurEvent) => {
          validateInputValue(blurEvent.type, blurEvent);
        }}
        value={currentName || ''}
        onChange={(e) => showCurrentValueInInput(e.target.value)}
        onFocus={(e) => showInput(e)}
      />
    </div>
  );
};

export default NameInputField;
