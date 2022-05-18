import { FC } from 'react';
import './AddList.scss';

type Props = {
    listsAdding: Function
};

export const AddList:FC<Props> = ({ listsAdding }) => {
    return (
        <div className="addList__buttonContainer">
            <button
                onClick={() => listsAdding()}
                type="button"
            >
                Add another list
            </button>
        </div>
    );
};
