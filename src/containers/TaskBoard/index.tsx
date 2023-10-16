import { useDispatch, useSelector } from 'react-redux';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';


import './index.scss';
import AddTaskButton from './AddTaskButton';
import Task from './Task';
import SubTask from './Subtask';

import { getTasks } from '../../store_two/task/selectors';
import { addTask } from '../../store_two/task/slice';

export default function TaskBoard() {
  // const {
  //   dragDropList,
  //   dragDropListWithTasks,
  //   dragDropTasks,
  //   addNewList,
  //   addTaskArrayToNewList,
  // } = useActions();
  const tasks = useSelector(getTasks);
  const dispatch = useDispatch();
  // const { tasks } = useTypedSelector((tasksState) => tasksState.tasksReducer);

  const handleOnDragEnd = (e: DropResult) => {
    if (e.destination !== undefined && e.destination !== null) {
      const indexTo = e.destination.index;
      const indexFrom = e.source.index;
      if (e.type === 'tasks') {
        // dragDropList(indexTo, indexFrom);
        // dragDropListWithTasks(indexTo, indexFrom);
      } else {
        const listFrom = getValueFromStr(e.source.droppableId, 9);
        const listTo = getValueFromStr(e.destination.droppableId, 9);
        // dragDropTasks(listTo, listFrom, indexTo, indexFrom);
      }
    }
  };

  const getValueFromStr = (value: string, countOfStr: number) => {
    return parseInt(value.substring(value.length, countOfStr), 10);
  };

  const onClickAddTask = () => {
    dispatch(addTask());
    // addNewList();
    // addTaskArrayToNewList(lists.length);
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
                console.log('aaaa', tasks[taskIndex].name);
                return (
                  // <p>{tasks[taskIndex].name}</p>
                  <Task
                    key={key}
                    list={tasks[taskIndex].name}
                    index={taskIndex}
                  >
                    {/* {tasks[taskIndex].subtasks.map((item, index) => (
                      <SubTask
                        taskIndex={taskIndex}
                        subtaskIndex={index}
                        task={item}
                      />
                    ))} */}
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
