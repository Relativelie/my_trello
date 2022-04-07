import {Children} from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { AddList } from "./addList/AddList";
import { Lists } from "./lists/Lists";
import { Tasks } from "./tasks/Tasks";


export default function App() {

    const { lists } = useTypedSelector(state => state.listOfTasksReducer)
    const { tasks } = useTypedSelector(tasksState => tasksState.tasksReducer);



    return (
        <div>
            <AddList />
                {lists.map((list: any, listIndex: any) =>
                    <Lists key={listIndex} list={list} index={listIndex}>
                        {Children.map(tasks[listIndex], (child, taskIndex) =>
                            <Tasks listIndex={listIndex} taskIndex={taskIndex} task={child}/>
                        )}
                    </Lists>
                    )}
        </div>
    )
}
