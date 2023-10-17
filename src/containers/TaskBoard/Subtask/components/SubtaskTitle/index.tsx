import { useDispatch } from 'react-redux';

import { AppNameInput } from '@components/index';
import { renameSubtask } from '@store/task/slice';

import './index.scss';

type SubtaskTitleProps = {
  subtaskIndex: number;
  taskIndex: number;
  title: string;
};

const SubtaskTitle: React.FC<SubtaskTitleProps> = ({
  subtaskIndex,
  taskIndex,
  title,
}) => {
  const dispatch = useDispatch();

  const onChange = (name: string) => {
    dispatch(renameSubtask({ name, subtaskIndex, taskIndex }));
  };

  return (
    <div className="subtask-title-container" data-taskindex={subtaskIndex}>
      <div className="subtask_title">
        <p>{title}</p>
      </div>
      <AppNameInput initialValue={title} onChange={onChange} />
    </div>
  );
};

export default SubtaskTitle;
