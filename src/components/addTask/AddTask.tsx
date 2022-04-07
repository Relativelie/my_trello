import { useRef } from "react";
import { FC } from "react"
import { useActions } from "../../hooks/useActions";

interface Props {
    indexOfList: number
}

export const AddTask:FC<Props> = ({indexOfList}) => {
    const { addTask } = useActions();
    const myRef = useRef<HTMLInputElement>(null);


const taskAdding = (e: any) => {
    if ((e.type === "click" || e.code === "Enter") && myRef.current !== null) {
        addTask(myRef.current.value, indexOfList);
        myRef.current.value = ""
    }

}


    return (
        <div>
            <input
            type="text"
            maxLength={34}
            onKeyPress={(e) => { taskAdding(e) }}
            ref={myRef}
            ></input>
            <button onClick={(e)=> {taskAdding(e)}}>Add task</button>
        </div>
    )
}