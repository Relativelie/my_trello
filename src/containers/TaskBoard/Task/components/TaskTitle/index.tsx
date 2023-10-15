import { InputField } from '../../../../../components';

import './index.scss';

type TaskTitleProps = {
  title: string;
  index: number;
};

const TaskTitle: React.FC<TaskTitleProps> = ({ title, index }) => {
  return (
    <div className="task-title-container">
      <div className="task-title">
        <p>{title}</p>
      </div>
      <InputField index={index} typeOfElement="task" taskValue="" />
    </div>
  );
};

export default TaskTitle;
