import { FC, useEffect } from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';

import { AppIconButton, InputField } from '../../../components';
import { useActions } from '../../../hooks/useActions';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import AddSubtaskForm from '../AddSubtaskForm';

import './index.scss';
import Icon from '../../../assets/icons/Close';

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
      nameValidationOff('list');
    }
  }, [isCorrectListName]);

  const removeListWithTasks = (elemIndex: number) => {
    removeList(elemIndex);
    removeAllTasksFromList(elemIndex);
  };

  return (
    <Draggable draggableId={`listBeing-${index}`} index={index}>
      {(provided) => (
        <div
          className="list"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <div>
            <div className="list__options">
              <div className="options__listNameBlock">
                <div className="options__listName options__listName_visibleName">
                  <p>{list}</p>
                </div>
                <InputField index={index} typeOfElement="list" taskValue="" />
              </div>
              <AppIconButton
                onClick={() => {
                  removeListWithTasks(index);
                }}
              >
                <Icon />
              </AppIconButton>
            </div>
            <AddSubtaskForm indexOfList={index} />
            <Droppable droppableId={`listArea-${index}`} type="tasks">
              {(taskProvided) => (
                <div
                  className="list__taskDropArea list__taskDropArea_scrollbar"
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
