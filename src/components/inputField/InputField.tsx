import { FC, SyntheticEvent, FocusEvent } from "react";

import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";

import "./InputField.scss";


interface Props {
    index: number[] | number,
    typeOfElement: string,
    taskValue: string
}

export const InputField: FC<Props> = ({ index, typeOfElement, taskValue }) => {

    const { nameValidationOn, showCurrentValueInInput } = useActions();
    const { lists } = useTypedSelector(state => state.listOfTasksReducer);
    const { currentName } = useTypedSelector(inputFieldState => inputFieldState.inputFieldReducer);


    const validateInputValue = (eventType: string, blurEvent: SyntheticEvent<EventTarget>) => {
        if (!(blurEvent.target instanceof EventTarget)) {
            return;
        }
        else if (eventType === "blur" || eventType === "Enter") {
            const elem = blurEvent.target as HTMLInputElement;
            const inputValue = elem.defaultValue;
            const indexElem = elem?.dataset?.elemkey?.split(",");
            if (indexElem !== undefined) {
                nameValidationOn(inputValue, indexElem, typeOfElement);
            }
            else {
                console.log("data-* attribute have to exist on the input field")
            }
            elem.classList.add("hideInput");
            elem.blur();
        }
    }

    const showInput = (e: FocusEvent<HTMLInputElement>) => {
        let inputValue;
        if (typeof index === "number") {
            inputValue = typeOfElement == "task" ? taskValue : lists[index];
        }
        else inputValue = taskValue;
        showCurrentValueInInput(inputValue);
        e.target.classList.remove("hideInput");
    }


    return (
        <div className="inputContainer">
            <input
                data-elemkey={index}
                className={`inputName hideInput`}
                type="text"
                maxLength={44}
                onKeyPress={(blurEvent) => { validateInputValue(blurEvent.key, blurEvent) }}
                onBlur={(blurEvent) => { validateInputValue(blurEvent.type, blurEvent) }}
                value={currentName}
                onChange={(e) => showCurrentValueInInput(e.target.value)}
                onFocus={(e) => showInput(e)}
            ></input>
        </div>
    )
}