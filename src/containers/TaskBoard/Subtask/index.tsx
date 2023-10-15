import { FC, useEffect } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { AppIconButton } from '../../../components';
import { useActions } from '../../../hooks/useActions';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import Icon from '../../../assets/icons/Close';

import './index.scss';
import DraggingIconBtn from './components/DraggingIconBtn';
import SubtaskTitle from './components/SubtaskTitle';

type SubTaskProps = {
  subtaskIndex: number;
  taskIndex: number;
  task: string;
};

const SubTask: FC<SubTaskProps> = ({ subtaskIndex, taskIndex, task }) => {
  const { nameValidationOff, renameTask, removeTask } = useActions();
  const { isCorrectTaskName, newName, indexOfRenamedElem } = useTypedSelector(
    (inputFieldState) => inputFieldState.inputFieldReducer,
  );

  useEffect(() => {
    if (isCorrectTaskName && newName != null && indexOfRenamedElem != null) {
      renameTask(
        parseInt(indexOfRenamedElem[0], 10),
        parseInt(indexOfRenamedElem[1], 10),
        newName,
      );
      nameValidationOff('task');
    }
  }, [isCorrectTaskName]);

  return (
    <Draggable
      draggableId={`subtask-${subtaskIndex}-${taskIndex}`}
      index={subtaskIndex}
    >
      {(provided) => (
        <div
          className="subtask-container"
          {...provided.draggableProps}
          ref={provided.innerRef}
        >
          <SubtaskTitle
            subtaskIndex={subtaskIndex}
            taskIndex={taskIndex}
            title={task}
          />
          <DraggingIconBtn dragHandleProps={provided.dragHandleProps} />
          <AppIconButton
            onClick={() => {
              removeTask(taskIndex, subtaskIndex);
            }}
          >
            <Icon />
          </AppIconButton>
        </div>
      )}
    </Draggable>
  );
};

export default SubTask;
