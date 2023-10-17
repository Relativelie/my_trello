import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addSubtask } from '@store/task/slice';

import './index.scss';

type AddSubtaskFormProps = {
  taskIndex: number;
};

const AddSubtaskForm: React.FC<AddSubtaskFormProps> = ({ taskIndex }) => {
  const myRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  const taskAdding = (e: string) => {
    if ((e === 'click' || e === 'Enter') && myRef.current !== null) {
      dispatch(addSubtask({ taskIndex, name: myRef.current.value }));
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
