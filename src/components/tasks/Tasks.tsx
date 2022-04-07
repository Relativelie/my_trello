import { useEffect } from "react"
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { InputField } from "../inputField/InputField"


export const Tasks = (props: any) => {

    const { nameValidationOff, renameTask } = useActions();
    const { isCorrectTaskName, newName, indexOfRenamedElem } = useTypedSelector(commonState => commonState.commonReducer);


    useEffect(() => {
        if (isCorrectTaskName && newName != null && indexOfRenamedElem != null) {
            renameTask(parseInt(indexOfRenamedElem[0]),parseInt(indexOfRenamedElem[1]), newName)
            nameValidationOff("task")
        }
    }, [isCorrectTaskName])


    return (
        <div>
            <div data-taskindex={props.taskIndex}>
                <p>{props.task}</p>
                </div>
            <InputField index={[props.listIndex, props.taskIndex]} typeOfElement={"task"} taskValue={props.task}/>
        </div>
    )
}


