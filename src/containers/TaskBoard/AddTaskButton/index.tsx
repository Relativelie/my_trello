import { FilledButton } from '@components/index';
import './index.scss';

type AddTaskButtonProps = {
  onClick: () => void;
};

const AddTaskButton: React.FC<AddTaskButtonProps> = ({ onClick }) => {
  return (
    <div className="add-task-container">
      <div>
        <FilledButton onClick={onClick}>Add another list</FilledButton>
      </div>
    </div>
  );
};

export default AddTaskButton;
