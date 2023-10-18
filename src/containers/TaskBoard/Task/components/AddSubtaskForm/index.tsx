import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addSubtask } from '@store/task/slice';
import { OutlinedButton } from '@components/index';

import './index.scss';
import { useTranslation } from 'react-i18next';

type AddSubtaskFormProps = {
  taskIndex: number;
};

const AddSubtaskForm: React.FC<AddSubtaskFormProps> = ({ taskIndex }) => {
  const myRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const onAddSubtask = (e: string) => {
    if (
      (e === 'click' || e === 'Enter') &&
      myRef.current !== null &&
      myRef.current.value.trim().length
    ) {
      dispatch(addSubtask({ taskIndex, name: myRef.current.value }));
      myRef.current.value = '';
    }
  };

  return (
    <div className="add-subtask-container">
      <input
        className="add-subtask__input"
        aria-label="input task name"
        type="text"
        maxLength={34}
        onKeyPress={(e) => onAddSubtask(e.key)}
        ref={myRef}
      />
      <OutlinedButton onClick={() => onAddSubtask('click')}>
        {t('addSubtask')}
      </OutlinedButton>
    </div>
  );
};

export default AddSubtaskForm;
