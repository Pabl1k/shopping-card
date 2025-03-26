import { FC } from 'react';
import clsx from 'clsx';

interface Props {
  className?: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
}

const Input: FC<Props> = ({ className, label, value, onChange }) => {
  return (
    <div className={clsx(className, 'relative w-full')}>
      <input
        value={value}
        className="w-full h-full rounded-input border border-border p-3 leading-normal outline-none focus:border-border-hover placeholder:text-text-grey"
        placeholder={label}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default Input;
