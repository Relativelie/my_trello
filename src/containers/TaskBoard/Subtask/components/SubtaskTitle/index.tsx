import { InputField } from '../../../../../components';
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
  return (
    <div className="subtask" data-taskindex={subtaskIndex}>
      <div className="subtask_title">
        <p>{title}</p>
      </div>
      <InputField
        index={[taskIndex, subtaskIndex]}
        typeOfElement="task"
        taskValue={title}
      />
    </div>
  );
};

export default SubtaskTitle;
