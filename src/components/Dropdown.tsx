import { FC, useRef, useState } from 'react';
import clsx from 'clsx';
import { useOutsideClick } from '../hooks/useOutsideClick.ts';
import { ReactComponent as ArrowIcon } from '../assets/icons/arrow.svg';
import Input from './Input.tsx';

interface Props {
  label: string;
  value: string;
  options: string[];
  error?: string;
  disabled?: boolean;
  onBlur?: () => void;
  onSelect: (value: string) => void;
  onReset: () => void;
}

const Dropdown: FC<Props> = ({
  label,
  value,
  options,
  error,
  disabled = false,
  onBlur,
  onSelect,
  onReset
}) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleSelect = (value: string) => {
    onSelect(value);
    setOpen(false);
  };

  useOutsideClick(ref, () => setOpen(false));

  const renderIcon = () => {
    if (value) {
      return (
        <button
          className="mr-3 cursor-pointer size-[20px] text-text-grey"
          onClick={(e) => {
            e.stopPropagation();
            onReset();
          }}
        >
          x
        </button>
      );
    }

    return (
      <ArrowIcon
        className={clsx(!open && 'rotate-180', 'transform transition-transform', 'mr-3')}
      />
    );
  };

  return (
    <div ref={ref} className="relative w-full" onBlur={onBlur}>
      <div onClick={() => setOpen(true)}>
        <Input label={label} value={value} disabled={disabled} suffix={renderIcon()} />
      </div>
      {open && (
        <div className="absolute max-h-[200px] w-full flex flex-col divide-y divide-border border-solid border z-10 border-border-hover rounded-b-input overflow-y-auto">
          {options.map((option) => (
            <div
              key={option}
              title={option}
              className="min-h-[42px] flex items-center cursor-pointer px-2 bg-background-white truncate last:rounded-bl-input last:rounded-br-input"
              onClick={() => handleSelect(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
      {error && <div className="text-error text-small">{error}</div>}
    </div>
  );
};

export default Dropdown;
