import { FC, useRef, useState } from 'react';
import Input from './Input/Input.tsx';
import { useOutsideClick } from '../common/useOutsideClick.ts';

interface Props {
  label: string;
  value: string;
  options: string[];
  onSelect: (value: string) => void;
}

const Dropdown: FC<Props> = ({ label, value, options, onSelect }) => {
  const [open, setOpen] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  const handleSelect = (value: string) => {
    onSelect(value);
    setOpen(false);
  };

  useOutsideClick(ref, () => setOpen(false));

  return (
    <div ref={ref} className="relative w-full">
      <div onClick={() => setOpen(true)}>
        <Input label={label} value={value} />
      </div>
      {open && (
        <div className="absolute max-h-[200px] w-full flex flex-col divide-y divide-border border-solid border  border-border-hover rounded-b-input overflow-y-auto">
          {options.map((option) => (
            <div
              key={option}
              className="min-h-[42px] flex items-center cursor-pointer px-2 bg-background-white z-10 last:rounded-bl-input last:rounded-br-input"
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
