import { DraggableProvidedDragHandleProps } from 'react-beautiful-dnd';
import DragDropImage from '../../../../../assets/png/drag-drop.png';

import './index.scss';

type DraggingIconBtnProps = {
  dragHandleProps?: DraggableProvidedDragHandleProps;
};

const DraggingIconBtn: React.FC<DraggingIconBtnProps> = ({
  dragHandleProps,
}) => {
  return (
    <div {...dragHandleProps} className="dragging-button icon-button_icon">
      <img src={DragDropImage} alt="drag and drop" />
    </div>
  );
};

export default DraggingIconBtn;
