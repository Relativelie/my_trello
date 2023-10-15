type IconProps = {
  className?: string;
};

const Icon: React.FC<IconProps> = ({ className = '' }) => {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="vuesax/linear/add">
        <g id="add">
          <path
            id="Vector"
            d="M5 18.999L18.9999 4.99914"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            id="Vector_2"
            d="M18.9999 19.0009L5 5.00098"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </g>
    </svg>
  );
};

export default Icon;
