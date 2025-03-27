import { FC, ReactNode } from 'react';
import clsx from 'clsx';

interface Props {
  className?: string;
  label: string;
  value: string;
  error?: string;
  disabled?: boolean;
  prefix?: ReactNode;
  onBlur?: () => void;
  onChange?: (value: string) => void;
}

const Input: FC<Props> = ({
  className,
  label,
  value,
  error,
  disabled,
  prefix,
  onBlur,
  onChange
}) => {
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
          onBlur={onBlur}
          onChange={(e) => onChange?.(e.target.value)}
        />
        {prefix}
      </div>
      {error && <div className="text-error text-small">{error}</div>}
    </div>
  );
};

export default Input;
