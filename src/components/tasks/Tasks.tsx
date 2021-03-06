import { FC, useEffect } from 'react';
import { Draggable } from 'react-beautiful-dnd';

import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';

import { InputField } from '../inputField/InputField';

import './Tasks.scss';

interface Props {
    taskIndex: number,
    listIndex: number,
    task: string
}

export const Tasks: FC<Props> = ({ taskIndex, listIndex, task }) => {
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
        <Draggable draggableId={`task-${taskIndex}-${listIndex}`} index={taskIndex}>
            {(provided) => (
                <div className="task" {...provided.draggableProps} ref={provided.innerRef}>
                    <div className="task__options" data-taskindex={taskIndex}>
                        <div className="options__taskName options__taskName_visibleName">
                            <p>{task}</p>
                        </div>
                        <InputField index={[listIndex, taskIndex]} typeOfElement="task" taskValue={task} />
                    </div>
                    <span
                        aria-label="drag task"
                        {...provided.dragHandleProps}
                        className="draggingBtn"
                    />
                    <button
                        aria-label="remove task"
                        className="options__removeTask"
                        onClick={() => removeTask(listIndex, taskIndex)}
                        type="button"
                    >
                        x
                    </button>
                </div>
            )}
        </Draggable>
    );
};
