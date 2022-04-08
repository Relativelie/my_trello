import { FC } from "react"
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";

import "./InputField.scss"


interface Props {
    index: any,
    typeOfElement: string,
    taskValue: null | string
}

export const InputField: FC<Props> = ({ index, typeOfElement, taskValue }) => {
    const { nameValidationOn, showCurrentValueInInput, inputValue } = useActions();
    const { lists } = useTypedSelector(state => state.listOfTasksReducer);
    const { tasks } = useTypedSelector(tasksState => tasksState.tasksReducer);
    const { currentName } = useTypedSelector(commonState => commonState.commonReducer);



    const validateInputValue = (blurEvent: any) => {
        if (blurEvent.type === "blur" || blurEvent.key === "Enter") {
            const inputValue = blurEvent.target.defaultValue;
            const indexElem = blurEvent.target.dataset.elemkey.split(",");
            nameValidationOn(inputValue, indexElem, typeOfElement);
            blurEvent.target.classList.add("hideInput")
        }
    }

    const showInput = (e: any) => {
        const inputValue = typeOfElement == "task" ? taskValue : lists[index]
        showCurrentValueInInput(inputValue)
        e.target.classList.remove("hideInput");
    }


    return (
        <div className="inputContainer">
            <input
                data-elemkey={index}
                className={`inputName hideInput`}
                type="text"
                maxLength={44}
                onKeyPress={(blurEvent) => { validateInputValue(blurEvent) }}
                onBlur={(blurEvent) => { validateInputValue(blurEvent) }}
                value={currentName}
                onChange={(e) => inputValue(e.target.value)}
                onFocus={(e) => showInput(e)}
            ></input>
        </div>

    )
}