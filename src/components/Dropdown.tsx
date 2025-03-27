import { FC, useRef, useState } from 'react';
import Input from './Input/Input.tsx';
import { useOutsideClick } from '../common/useOutsideClick.ts';
import { ReactComponent as ArrowIcon } from '../assets/icons/arrow.svg';
import clsx from 'clsx';

interface Props {
  label: string;
  value: string;
  options: string[];
  disabled?: boolean;
  onSelect: (value: string) => void;
  onReset: () => void;
}

const Dropdown: FC<Props> = ({ label, value, options, disabled = false, onSelect, onReset }) => {
  const [open, setOpen] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  const handleSelect = (value: string) => {
    onSelect(value);
    setOpen(false);
  };

  useOutsideClick(ref, () => setOpen(false));

  const renderPrefix = () => {
    if (value) {
      return (
        <button
          className="mr-3 cursor-pointer size-[20px]"
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
    <div ref={ref} className="relative w-full">
      <div onClick={() => setOpen(true)}>
        <Input label={label} value={value} disabled={disabled} prefix={renderPrefix()} />
      </div>
      {open && (
        <div className="absolute max-h-[200px] w-full flex flex-col divide-y divide-border border-solid border  border-border-hover rounded-b-input overflow-y-auto">
          {options.map((option) => (
            <div
              key={option}
              title={option}
              className="min-h-[42px] flex items-center cursor-pointer px-2 bg-background-white truncate z-10 last:rounded-bl-input last:rounded-br-input"
              onClick={() => handleSelect(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
