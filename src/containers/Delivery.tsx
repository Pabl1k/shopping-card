import { FC } from 'react';
import Input from '../components/Input/Input.tsx';
import Wrapper from '../components/Wrapper.tsx';

interface Props {
  onChange?: () => void;
}
//
// interface Item {
//   name: string;
//   label: string;
//   size: 'full' | 'half' | 'third';
// }

const Delivery: FC<Props> = () => {
  // const items: Item[] = [
  //   { name: 'firstName', label: 'First Name', size: 'half' },
  //   { name: 'lastName', label: 'Last Name', size: 'half' },
  //   { name: 'city', label: 'City', size: 'third' },
  //   { name: 'province', label: 'State / Province', size: 'half' },
  //   { name: 'zip', label: 'ZIP / Postal Code', size: 'half' },
  //   { name: 'country', label: 'Country', size: 'full' }
  // ];

  return (
    <Wrapper title="Delivery">
      <div className="flex flex-col gap-3">
        <div className="flex w-full gap-3">
          <Input label="First Name" value="" />
          <Input label="Last Name" value="" />
        </div>
        <div className="flex w-full gap-3">
          <Input label="City" value="" />
          <Input label="State / Province" value="" />
          <Input label="ZIP / Postal Code" value="" />
        </div>
        <Input label="Country" value="" />
      </div>
    </Wrapper>
  );
};

export default Delivery;
