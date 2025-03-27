import { FC } from 'react';
import Input from '../components/Input/Input.tsx';
import Wrapper from '../components/Wrapper.tsx';
import { DeliveryState } from '../App.tsx';
import Dropdown from '../components/Dropdown.tsx';
import { Countries } from '../assets/countries.ts';

interface Props {
  deliveryState: DeliveryState;
  onChange: (field: keyof DeliveryState, value: string) => void;
}

const Delivery: FC<Props> = ({ deliveryState, onChange }) => {
  const { firstName, lastName, address, city, province, zip, country } = deliveryState;
  const countries = Object.keys(Countries).sort();
  const provinces = Countries[country] ? Countries[country].sort() : [];

  const handleReset = (field: 'country' | 'province') => {
    if (field === 'country') {
      onChange('province', '');
    }

    onChange(field, '');
  };

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
          <Dropdown
            label="State / Province"
            value={province}
            options={provinces}
            disabled={!country}
            onSelect={(value) => onChange('province', value)}
            onReset={() => handleReset('province')}
          />
          <Input
            label="ZIP / Postal Code"
            value={zip}
            onChange={(value) => onChange('zip', value)}
          />
        </div>
        <Dropdown
          label="Country"
          value={country}
          options={countries}
          onSelect={(value) => {
            onChange('country', value);
            handleReset('province');
          }}
          onReset={() => handleReset('country')}
        />
      </div>
    </Wrapper>
  );
};

export default Delivery;
