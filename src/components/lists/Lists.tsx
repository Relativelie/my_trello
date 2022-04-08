import { useEffect } from "react"
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { AddTask } from "../addTask/AddTask";

import { InputField } from "../inputField/InputField";

import "./Lists.scss"


// interface Props {
//     tasks: any
// }


export const Lists = ({ children, index, list }: any) => {

    const { nameValidationOff, renameList } = useActions();
    const { isCorrectListName, newName, indexOfRenamedElem } = useTypedSelector(commonState => commonState.commonReducer);

    useEffect(() => {
        if (isCorrectListName && newName != null && indexOfRenamedElem != []) {
            renameList(newName, parseInt(indexOfRenamedElem[0]))
            nameValidationOff("list")
        }
    }, [isCorrectListName])



    return (
        <div className="listsContainer">

            <div>
                <div className="listNameContainer">
                    <div className="listName">
                        <div className="visibleName">
                            <p>{list}</p>
                        </div>
                        <InputField index={index} typeOfElement={"list"} taskValue={null} />
                    </div>
                    <button className="removeList">x</button>
                </div>

                {children}
                <AddTask indexOfList={index} />
            </div>

        </div>
    )
}

