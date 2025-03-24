import { FC } from 'react';
import './Input.css';

interface Props {
  label: string;
  value: string;
}

const Input: FC<Props> = ({ label, value }) => {
  return (
    <div className="inputGroup">
      <input required autoComplete="off" value={value} />
      <label htmlFor={label}>{label}</label>
    </div>
  );
};

export default Input;
