import { useEffect } from "react"
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";

import { InputField } from "../inputField/InputField";

import "./Lists.scss"


// interface Props {
//     tasks: any
// }


export const Lists = ({ children, index, list }: any) => {

    const { nameValidationOff, renameList } = useActions();
    const { lists } = useTypedSelector(state => state.listOfTasksReducer);
    const { isCorrectListName, newName, indexOfRenamedElem } = useTypedSelector(commonState => commonState.commonReducer);

    useEffect(() => {
        if (isCorrectListName && newName != null && indexOfRenamedElem != []) {
            renameList(newName, parseInt(indexOfRenamedElem[0]))
            nameValidationOff("list")
        }
    }, [isCorrectListName])



    return (
        <div className="listsContainer">

            <div className="list">
                <div className="listName">
                    <div className="visibleName">
                        <p>{list}, {index}</p>
                    </div>
                    <InputField index={index} typeOfElement={"list"} taskValue={null}/>
                </div>
                {children}
            </div>

        </div>
    )
}

