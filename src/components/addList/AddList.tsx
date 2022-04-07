import { useActions } from "../../hooks/useActions";

import "./AddList.scss";


export const AddList = () => {
    const { addNewList } = useActions();


    return (
        <div className="addListButtonContainer">
            <button onClick={() => addNewList()}>Add another list</button>
        </div>
    )
}