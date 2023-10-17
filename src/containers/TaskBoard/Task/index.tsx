import { useDispatch } from 'react-redux';
import { Draggable, Droppable } from 'react-beautiful-dnd';

import { AppIconButton } from '@components/index';
import { removeTask } from '@store/task/slice';
import Icon from '@assets/icons/Close';

import AddSubtaskForm from './components/AddSubtaskForm';
import TaskTitle from './components/TaskTitle';

import './index.scss';

type TaskProps = {
  index: number;
  title: string;
};

const Task: React.FC<TaskProps> = ({ children, index, title }) => {
  const dispatch = useDispatch();

  return (
    <Draggable draggableId={`taskItem-${index}`} index={index}>
      {(provided) => (
        <div
          className="task"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <div>
            <div className="task_actions-container">
              <TaskTitle title={title} index={index} />
              <AppIconButton
                onClick={() => {
                  dispatch(removeTask(index));
                }}
              >
                <Icon />
              </AppIconButton>
            </div>

            <AddSubtaskForm taskIndex={index} />

            <Droppable droppableId={`taskArea-${index}`} type="subtasks">
              {(taskProvided) => (
                <div
                  className="task_subtask-container"
                  {...taskProvided.droppableProps}
                  ref={taskProvided.innerRef}
                >
                  {children}
                  {taskProvided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default Task;
