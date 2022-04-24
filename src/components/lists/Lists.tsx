import { FC, useEffect } from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';

import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';

import { AddTask } from '../addTask/AddTask';
import { InputField } from '../inputField/InputField';

import './Lists.scss';

interface Props {
    index: number,
    list: string
}

export const Lists: FC<Props> = ({ children, index, list }) => {
    const { nameValidationOff, renameList, removeList, removeAllTasksFromList } = useActions();
    const { isCorrectListName, newName, indexOfRenamedElem } = useTypedSelector(
        (inputFieldState) => inputFieldState.inputFieldReducer,
    );

    useEffect(() => {
        if (isCorrectListName && newName != null && indexOfRenamedElem !== []) {
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
                <div className="listsContainer" {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                    <div>
                        <div className="listNameContainer">
                            <div className="listName">
                                <div className="visibleName">
                                    <p>{list}</p>
                                </div>
                                <InputField index={index} typeOfElement="list" taskValue="" />
                            </div>
                            <button
                                aria-label="remove list"
                                className="removeList"
                                onClick={() => { removeListWithTasks(index); }}
                                type="button"
                            >
                                x
                            </button>
                        </div>
                        <AddTask indexOfList={index} />
                        <Droppable droppableId={`listArea-${index}`} type="tasks">
                            {(provided) => (
                                <div
                                    className="dropppableTasksBlock"
                                    {...provided.droppableProps}
                                    ref={provided.innerRef}
                                >
                                    {children}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    </div>
                </div>
            )}
        </Draggable>
    );
};
