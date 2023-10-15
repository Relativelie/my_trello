import './index.scss';

type FilledButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
};

const FilledButton: React.FC<FilledButtonProps> = ({ onClick, children }) => {
  return (
    <button className="filled-button" onClick={onClick} type="button">
      {children}
    </button>
  );
};

export default FilledButton;
