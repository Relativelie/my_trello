import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";

import "./AddList.scss";


export const AddList = () => {
    const { addNewList, addTaskArrayToNewList } = useActions();
    const { lists } = useTypedSelector(listsState => listsState.listOfTasksReducer);

    const listsAdding = () => {
        addNewList();
        addTaskArrayToNewList(lists.length)
    }


    return (
        <div className="addListButtonContainer">
            <button onClick={() => listsAdding()}>Add another list</button>
        </div>
    )
}