import { ButtonVariantsENUM, buttonStyles } from './models';
import './index.scss';

type AppIconButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: ButtonVariantsENUM;
};

const AppIconButton: React.FC<AppIconButtonProps> = ({
  onClick,
  children,
  variant = ButtonVariantsENUM.common,
}) => {
  return (
    <button className={buttonStyles[variant]} onClick={onClick} type="button">
      <div className="icon-button_icon icon-button">{children}</div>
    </button>
  );
};

export default AppIconButton;
