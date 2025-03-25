import { FC } from 'react';

interface Props {
  label: string;
  onClick?: () => void;
}

const Button: FC<Props> = ({ label, onClick }) => {
  return (
    <button className="h-[48px] rounded-button bg-button cursor-pointer" onClick={onClick}>
      <span className="uppercase text-white font-bold leading-button">{label}</span>
    </button>
  );
};

export default Button;
