import { FC, useRef, useState } from 'react';
import Input from './Input/Input.tsx';
import { useOutsideClick } from '../common/useOutsideClick.ts';

interface Props {}
const list = ['item1', 'item2', 'item3', 'item4', 'item5'];

const Dropdown: FC<Props> = ({}) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState('');

  const ref = useRef<HTMLDivElement>(null);

  useOutsideClick(ref, () => setOpen(false));

  return (
    <div ref={ref} className="relative" onClick={() => setOpen(!open)}>
      <Input label="label" value={selected} />
      {open && (
        <div className="absolute h-[200px] w-full flex flex-col divide-y divide-border border-solid bg-background-white border border-border rounded-b-input overflow-y-auto">
          {list.map((item) => (
            <div
              key={item}
              className="min-h-[42px] flex items-center cursor-pointer px-2 last:rounded-bl-input last:rounded-br-input"
              onClick={() => setSelected(item)}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
