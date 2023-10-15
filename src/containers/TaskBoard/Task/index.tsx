import { FC, useEffect } from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';

import { AppIconButton } from '../../../components';
import { useActions } from '../../../hooks/useActions';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import AddSubtaskForm from './components/AddSubtaskForm';

import './index.scss';
import Icon from '../../../assets/icons/Close';
import TaskTitle from './components/TaskTitle';

type TaskProps = {
  index: number;
  list: string;
};

const Task: FC<TaskProps> = ({ children, index, list }) => {
  const { nameValidationOff, renameList, removeList, removeAllTasksFromList } =
    useActions();
  const { isCorrectListName, newName, indexOfRenamedElem } = useTypedSelector(
    (inputFieldState) => inputFieldState.inputFieldReducer,
  );

  useEffect(() => {
    if (isCorrectListName && newName != null && indexOfRenamedElem.length) {
      renameList(newName, parseInt(indexOfRenamedElem[0], 10));
      nameValidationOff('subtask');
    }
  }, [isCorrectListName]);

  const removeListWithTasks = (elemIndex: number) => {
    removeList(elemIndex);
    removeAllTasksFromList(elemIndex);
  };

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
              <TaskTitle title={list} index={index} />
              <AppIconButton
                onClick={() => {
                  removeListWithTasks(index);
                }}
              >
                <Icon />
              </AppIconButton>
            </div>

            <AddSubtaskForm indexOfList={index} />

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
