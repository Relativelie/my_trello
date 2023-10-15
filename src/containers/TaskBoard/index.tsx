import { Children } from 'react';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';

import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';

import './index.scss';
import AddTaskButton from './AddTaskButton';
import Task from './Task';
import SubTask from './Subtask';

export default function TaskBoard() {
  const {
    dragDropList,
    dragDropListWithTasks,
    dragDropTasks,
    addNewList,
    addTaskArrayToNewList,
  } = useActions();
  const { lists } = useTypedSelector((state) => state.listOfTasksReducer);
  const { tasks } = useTypedSelector((tasksState) => tasksState.tasksReducer);

  const handleOnDragEnd = (e: DropResult) => {
    if (e.destination !== undefined && e.destination !== null) {
      const indexTo = e.destination.index;
      const indexFrom = e.source.index;
      if (e.type === 'tasks') {
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

  const onClickAddTask = () => {
    addNewList();
    addTaskArrayToNewList(lists.length);
  };

  return (
    <main>
      <AddTaskButton onClick={onClickAddTask} />
      <DragDropContext onDragEnd={(e) => handleOnDragEnd(e)}>
        <Droppable droppableId="tasks" type="tasks" direction="horizontal">
          {(provided) => (
            <div
              className="listsBlock"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              <div className="listsBlock__container">
                {lists.map((list: string, listIndex: number) => (
                  <Task key={listIndex} list={list} index={listIndex}>
                    {Children.map(tasks[listIndex], (child, taskIndex) => (
                      <SubTask
                        taskIndex={listIndex}
                        subtaskIndex={taskIndex}
                        task={child}
                      />
                    ))}
                  </Task>
                ))}
              </div>
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </main>
  );
}
