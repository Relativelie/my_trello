import './index.scss';

type OutlinedButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
};

const OutlinedButton: React.FC<OutlinedButtonProps> = ({
  onClick,
  children,
}) => {
  return (
    <button className="outlined-button" onClick={onClick} type="button">
      {children}
    </button>
  );
};

export default OutlinedButton;
