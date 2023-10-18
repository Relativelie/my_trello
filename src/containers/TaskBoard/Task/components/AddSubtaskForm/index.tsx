import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addSubtask } from '@store/task/slice';
import { OutlinedButton } from '@components/index';

import './index.scss';

type AddSubtaskFormProps = {
  taskIndex: number;
};

const AddSubtaskForm: React.FC<AddSubtaskFormProps> = ({ taskIndex }) => {
  const myRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  const addTask = (e: string) => {
    if (
      (e === 'click' || e === 'Enter') &&
      myRef.current !== null &&
      myRef.current.value.length
    ) {
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
        onKeyPress={(e) => addTask(e.key)}
        ref={myRef}
      />
      <OutlinedButton onClick={() => addTask('click')}>Add task</OutlinedButton>
    </div>
  );
};

export default AddSubtaskForm;
