import { FC, useRef } from 'react';
import { useActions } from '../../../hooks/useActions';

import './AddTask.scss';

interface Props {
    indexOfList: number
}

export const AddTask: FC<Props> = ({ indexOfList }) => {
    const { addTask, addTaskArrayToNewList } = useActions();
    const myRef = useRef<HTMLInputElement>(null);

    const taskAdding = (e: string) => {
        if ((e === 'click' || e === 'Enter') && myRef.current !== null) {
            addTaskArrayToNewList(indexOfList);
            addTask(myRef.current.value, indexOfList);
            myRef.current.value = '';
        }
    };

    return (
        <div className="addTaskContainer">
            <input
                aria-label="input task name"
                type="text"
                maxLength={34}
                onKeyPress={(e) => taskAdding(e.key)}
                ref={myRef}
            />
            <button
                onClick={(e) => taskAdding(e.type)}
                type="button"
            >
                Add task
            </button>
        </div>
    );
};
