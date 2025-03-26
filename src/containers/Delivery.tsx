import { FC } from 'react';
import Input from '../components/Input/Input.tsx';
import Wrapper from '../components/Wrapper.tsx';
import { DeliveryState } from '../App.tsx';

interface Props {
  deliveryState: DeliveryState;
  onChange: (field: keyof DeliveryState, value: string) => void;
}

const Delivery: FC<Props> = ({ deliveryState, onChange }) => {
  const { firstName, lastName, address, city, province, zip, country } = deliveryState;

  return (
    <Wrapper title="Delivery">
      <div className="flex flex-col gap-3">
        <div className="flex w-full gap-3">
          <Input
            label="First Name"
            value={firstName}
            onChange={(value) => onChange('firstName', value)}
          />
          <Input
            label="Last Name"
            value={lastName}
            onChange={(value) => onChange('lastName', value)}
          />
        </div>
        <Input label="Address" value={address} onChange={(value) => onChange('address', value)} />
        <Input
          className="md:hidden"
          label="City"
          value={city}
          onChange={(value) => onChange('city', value)}
        />
        <div className="flex w-full gap-3">
          <Input
            className="max-md:hidden"
            label="City"
            value={city}
            onChange={(value) => onChange('city', value)}
          />
          <Input
            label="State / Province"
            value={province}
            onChange={(value) => onChange('province', value)}
          />
          <Input
            label="ZIP / Postal Code"
            value={zip}
            onChange={(value) => onChange('zip', value)}
          />
        </div>
        <Input label="Country" value={country} onChange={(value) => onChange('country', value)} />
      </div>
    </Wrapper>
  );
};

export default Delivery;
