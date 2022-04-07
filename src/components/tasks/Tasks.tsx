import { useEffect } from "react"
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { InputField } from "../inputField/InputField";

import "./Tasks.scss"


export const Tasks = (props: any) => {

    const { nameValidationOff, renameTask } = useActions();
    const { isCorrectTaskName, newName, indexOfRenamedElem } = useTypedSelector(commonState => commonState.commonReducer);


    useEffect(() => {
        if (isCorrectTaskName && newName != null && indexOfRenamedElem != null) {
            renameTask(parseInt(indexOfRenamedElem[0]), parseInt(indexOfRenamedElem[1]), newName)
            nameValidationOff("task")
        }
    }, [isCorrectTaskName])


    return (
        <div className="taskContainer">
            <div className="taskName" data-taskindex={props.taskIndex}>
                <div className="visibleName">
                    <p>{props.task}</p>
                </div>

                <InputField index={[props.listIndex, props.taskIndex]} typeOfElement={"task"} taskValue={props.task} />
            </div>

            <button className="removeButton">x</button>
        </div>
    )
}


