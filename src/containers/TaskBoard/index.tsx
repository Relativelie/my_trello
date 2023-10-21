import { useDispatch, useSelector } from 'react-redux';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';

import { getTasks } from '@store/task/selectors';
import { addTask, dragDropSubtask, dragDropTask } from '@store/task/slice';

import AddTaskButton from './AddTaskButton';
import Task from './Task';
import SubTask from './Subtask';

import './index.scss';

export default function TaskBoard() {
  const tasks = useSelector(getTasks);
  const dispatch = useDispatch();

  const handleOnDragEnd = (e: DropResult) => {
    if (e.destination !== undefined && e.destination !== null) {
      const indexTo = e.destination.index;
      const indexFrom = e.source.index;
      if (e.type === 'tasks') {
        dispatch(dragDropTask({ indexTo, indexFrom }));
      } else {
        const fromIndexTask = getValueFromStr(e.source.droppableId, 9);
        const toIndexTask = getValueFromStr(e.destination.droppableId, 9);

        dispatch(
          dragDropSubtask({
            toIndexTask,
            fromIndexTask,
            toIndexSubtask: indexTo,
            fromIndexSubtask: indexFrom,
          }),
        );
      }
    }
  };

  const getValueFromStr = (value: string, countOfStr: number) => {
    return parseInt(value.substring(value.length, countOfStr), 10);
  };

  const onClickAddTask = () => {
    dispatch(addTask());
  };

  return (
    <main>
      <AddTaskButton onClick={onClickAddTask} />
      <DragDropContext onDragEnd={(e) => handleOnDragEnd(e)}>
        <Droppable droppableId="tasks" type="tasks" direction="horizontal">
          {(provided) => (
            <div
              className="task-container"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {Object.keys(tasks).map((key) => {
                const taskIndex = parseInt(key, 10);
                return (
                  <Task
                    key={key}
                    title={tasks[taskIndex].name}
                    index={taskIndex}
                  >
                    {tasks[taskIndex].subtasks.map((item, index) => (
                      <SubTask
                        key={`${item}-${index}}`}
                        taskIndex={taskIndex}
                        subtaskIndex={index}
                        title={item}
                      />
                    ))}
                  </Task>
                );
              })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </main>
  );
}
