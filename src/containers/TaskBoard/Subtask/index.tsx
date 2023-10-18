import { useDispatch } from 'react-redux';
import { Draggable } from 'react-beautiful-dnd';

import { AppIconButton } from '@components/index';
import { ButtonVariantsENUM } from '@components/IconButton/models';
import Icon from '@assets/icons/Close';
import { removeSubtask } from '@store/task/slice';

import DraggingIconBtn from './components/DraggingIconBtn';
import SubtaskTitle from './components/SubtaskTitle';

import './index.scss';

type SubTaskProps = {
  subtaskIndex: number;
  taskIndex: number;
  title: string;
};

const SubTask: React.FC<SubTaskProps> = ({
  subtaskIndex,
  taskIndex,
  title,
}) => {
  const dispatch = useDispatch();

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
            title={title}
          />
          <DraggingIconBtn dragHandleProps={provided.dragHandleProps} />
          <AppIconButton
            variant={ButtonVariantsENUM.deleting}
            onClick={() => {
              dispatch(removeSubtask({ taskIndex, subtaskIndex }));
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
