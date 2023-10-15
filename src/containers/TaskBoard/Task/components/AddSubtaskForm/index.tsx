import { FC, useRef } from 'react';
import { useActions } from '../../../../../hooks/useActions';

import './index.scss';

type AddSubtaskFormProps = {
  indexOfList: number;
};

const AddSubtaskForm: FC<AddSubtaskFormProps> = ({ indexOfList }) => {
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
    <div className="taskOption__adding">
      <input
        className="taskOption__adding__inputField"
        aria-label="input task name"
        type="text"
        maxLength={34}
        onKeyPress={(e) => taskAdding(e.key)}
        ref={myRef}
      />
      <button
        className="taskOption__adding__addBtn"
        onClick={(e) => taskAdding(e.type)}
        type="button"
      >
        Add task
      </button>
    </div>
  );
};

export default AddSubtaskForm;
