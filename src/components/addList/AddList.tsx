import { useEffect } from "react"
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";


export const AddList = () => {
    const { addNewList } = useActions();
    const { lists } = useTypedSelector(state => state.listOfTasksReducer);


    return (
        <div>
            <button onClick={() => addNewList()}>Add another list</button>
        </div>
    )
}