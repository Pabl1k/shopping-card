import { FC, ReactNode } from 'react';
import clsx from 'clsx';

interface Props {
  className?: string;
  label: string;
  value: string;
  disabled?: boolean;
  prefix?: ReactNode;
  onChange?: (value: string) => void;
}

const Input: FC<Props> = ({ className, label, value, disabled, prefix, onChange }) => {
  return (
    <div className={clsx(className, 'relative w-full')}>
      <div
        className={clsx(
          disabled && 'bg-border',
          'flex justify-between items-center rounded-input border border-border leading-normal focus:border-border-hover placeholder:text-text-grey'
        )}
      >
        <input
          value={value}
          className="h-full w-full p-3 outline-none"
          placeholder={label}
          disabled={disabled}
          onChange={(e) => onChange?.(e.target.value)}
        />
        {prefix}
      </div>
    </div>
  );
};

export default Input;
