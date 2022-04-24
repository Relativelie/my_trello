import { Children } from 'react';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';

import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';

import { AddList } from './addList/AddList';
import { Lists } from './lists/Lists';
import { Tasks } from './tasks/Tasks';

import './App.scss';

export default function App() {
    const { dragDropList, dragDropListWithTasks, dragDropTasks } = useActions();
    const { lists } = useTypedSelector((state) => state.listOfTasksReducer);
    const { tasks } = useTypedSelector((tasksState) => tasksState.tasksReducer);

    const handleOnDragEnd = (e: DropResult) => {
        if (e.destination !== undefined && e.destination !== null) {
            const indexTo = e.destination.index;
            const indexFrom = e.source.index;
            if (e.type === 'lists') {
                dragDropList(indexTo, indexFrom);
                dragDropListWithTasks(indexTo, indexFrom);
            } else {
                const listFrom = getValueFromStr(e.source.droppableId, 9);
                const listTo = getValueFromStr(e.destination.droppableId, 9);
                dragDropTasks(listTo, listFrom, indexTo, indexFrom);
            }
        }
    };

    const getValueFromStr = (value: string, countOfStr: number) => {
        return parseInt(value.substring(value.length, countOfStr), 10);
    };

    return (
        <div>
            <AddList />
            <DragDropContext onDragEnd={(e) => handleOnDragEnd(e)}>
                <Droppable droppableId="lists" type="lists" direction="horizontal">
                    {(provided) => (
                        <div {...provided.droppableProps} ref={provided.innerRef}>
                            <div className="listsBlock">
                                {lists.map((list: string, listIndex: number) => (
                                    <Lists key={listIndex} list={list} index={listIndex}>
                                        {Children.map(tasks[listIndex], (child, taskIndex) => (
                                            <Tasks
                                                listIndex={listIndex}
                                                taskIndex={taskIndex}
                                                task={child}
                                            />
                                        ))}
                                    </Lists>
                                ))}
                            </div>
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        </div>
    );
}
