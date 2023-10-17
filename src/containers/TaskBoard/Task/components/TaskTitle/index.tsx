import { useDispatch } from 'react-redux';

import { AppNameInput } from '@components/index';
import { renameTask } from '@store/task/slice';

import './index.scss';

type TaskTitleProps = {
  title: string;
  index: number;
};

const TaskTitle: React.FC<TaskTitleProps> = ({ title, index }) => {
  const dispatch = useDispatch();

  const onChange = (name: string) => {
    dispatch(renameTask({ name, index }));
  };

  return (
    <div className="task-title-container">
      <div className="task-title">
        <p>{title}</p>
      </div>
      <AppNameInput initialValue={title} onChange={onChange} />
    </div>
  );
};

export default TaskTitle;
