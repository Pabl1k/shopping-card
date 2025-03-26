import { FC } from 'react';
import Input from '../components/Input/Input.tsx';
import Wrapper from '../components/Wrapper.tsx';

interface Props {
  onChange?: () => void;
}

const Delivery: FC<Props> = () => {
  return (
    <Wrapper title="Delivery">
      <div className="flex flex-col gap-3">
        <div className="flex w-full gap-3">
          <Input label="First Name" value="" />
          <Input label="Last Name" value="" />
        </div>
        <Input className="md:hidden" label="City" value="" />
        <div className="flex w-full gap-3">
          <Input className="max-md:hidden" label="City" value="" />
          <Input label="State / Province" value="" />
          <Input label="ZIP / Postal Code" value="" />
        </div>
        <Input label="Country" value="" />
      </div>
    </Wrapper>
  );
};

export default Delivery;
