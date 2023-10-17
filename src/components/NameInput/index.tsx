import { SyntheticEvent, FocusEvent, useEffect, useRef } from 'react';

import './index.scss';

const maxInputLength = 44;

type NameInputProps = {
  initialValue: string;
  onChange?: (value: string) => void;
};

const AppNameInput: React.FC<NameInputProps> = ({ onChange, initialValue }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = initialValue;
    }
  }, [initialValue]);

  const validation = (
    eventType: string,
    blurEvent: SyntheticEvent<EventTarget>,
  ) => {
    if (eventType !== 'blur' && eventType !== 'Enter') return;

    const elem = blurEvent.target as HTMLInputElement;
    const newVal = elem.value;
    if (newVal.length && onChange) {
      onChange(newVal);
    }

    hideInput(elem);
  };

  const showInput = (e: FocusEvent<HTMLInputElement>) => {
    e.target.classList.remove('name-input_hideInput');
  };

  const hideInput = (elem: HTMLInputElement) => {
    elem.classList.add('name-input_hideInput');
    elem.blur();
  };

  return (
    <div className="name-input-container">
      <input
        ref={inputRef}
        className="name-input name-input_hideInput"
        type="text"
        maxLength={maxInputLength}
        onKeyPress={(blurEvent) => {
          validation(blurEvent.key, blurEvent);
        }}
        onBlur={(blurEvent) => {
          validation(blurEvent.type, blurEvent);
        }}
        onFocus={(e) => showInput(e)}
      />
    </div>
  );
};

export default AppNameInput;
