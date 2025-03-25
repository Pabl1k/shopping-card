import { FC } from 'react';
import clsx from 'clsx';
import './Input.css';

interface Props {
  className?: string;
  label: string;
  value: string;
}

const Input: FC<Props> = ({ className, label, value }) => {
  return (
    <div className={clsx(className, 'inputGroup')}>
      <input required autoComplete="off" value={value} />
      <label htmlFor={label}>{label}</label>
    </div>
  );
};

export default Input;
