import { FC } from 'react';
import './AddList.scss';

type Props = {
    listsAdding: Function
};

export const AddList:FC<Props> = ({ listsAdding }) => {
    return (
        <div className="addListButtonContainer">
            <button
                onClick={() => listsAdding()}
                type="button"
            >
                Add another list
            </button>
        </div>
    );
};
