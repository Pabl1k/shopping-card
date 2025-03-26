import { FC } from 'react';
import clsx from 'clsx';

interface Props {
  className?: string;
  label: string;
  value: string;
}

const Input: FC<Props> = ({ className, label, value }) => {
  return (
    <div className={clsx(className, 'relative w-full')}>
      <input
        value={value}
        className="w-full h-full rounded-input border border-border p-3 leading-normal outline-none focus:border-border-hover placeholder:text-text-grey"
        placeholder={label}
      />
    </div>
  );
};

export default Input;

// import './Input.css';
//
// <div className={clsx(className, 'inputGroup')}>
//       <input required autoComplete="off" value={value} />
//       <label htmlFor={label}>{label}</label>
//     </div>
