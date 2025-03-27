import { FC, ReactNode } from 'react';
import clsx from 'clsx';

interface Props {
  className?: string;
  label: string;
  value: string;
  error?: string;
  disabled?: boolean;
  prefix?: ReactNode;
  inputMode?: 'text' | 'email' | 'numeric';
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
  inputMode = 'text',
  onBlur,
  onChange
}) => {
  return (
    <div className={clsx(className, 'relative w-full')}>
      <div
        className={clsx(
          disabled && 'bg-border',
          'flex justify-between items-center rounded-input bg-background-white border border-border leading-normal focus:border-border-hover placeholder:text-text-grey'
        )}
      >
        <input
          type="text"
          inputMode={inputMode}
          value={value}
          className={clsx(disabled && ' cursor-not-allowed', 'h-full w-full p-3 outline-none')}
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
