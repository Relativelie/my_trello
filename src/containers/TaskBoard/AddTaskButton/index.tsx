import { FilledButton } from '@components/index';
import { useTranslation } from 'react-i18next';

import './index.scss';

type AddTaskButtonProps = {
  onClick: () => void;
};

const AddTaskButton: React.FC<AddTaskButtonProps> = ({ onClick }) => {
  const { t } = useTranslation();

  return (
    <div className="add-task-container">
      <div>
        <FilledButton onClick={onClick}>{t('addTask')}</FilledButton>
      </div>
    </div>
  );
};

export default AddTaskButton;
