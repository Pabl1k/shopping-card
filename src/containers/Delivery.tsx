import { FC } from 'react';
import Input from '../components/Input.tsx';
import Wrapper from '../components/Wrapper.tsx';
import Dropdown from '../components/Dropdown.tsx';
import { Countries } from '../assets/countries.ts';
import { DeliveryState, Fields } from '../hooks/model.ts';

interface Props {
  deliveryState: DeliveryState;
  errors: DeliveryState;
  validateField: (field: Fields) => Promise<void>;
  setError: (field: Fields, reset?: boolean) => void;
  onChange: (field: keyof DeliveryState, value: string) => void;
}

const Delivery: FC<Props> = ({ deliveryState, errors, validateField, setError, onChange }) => {
  const { firstName, lastName, address, city, province, zip, country } = deliveryState;
  const countries = Object.keys(Countries).sort();
  const provinces = Countries[country] ? Countries[country].sort() : [];

  const handleReset = (field: 'country' | 'province') => {
    if (field === 'country') {
      onChange('province', '');
    }

    onChange(field, '');
  };

  const handleCountrySelect = (value: string) => {
    onChange('country', value);
    handleReset('province');
    setError('country', true);
    setError('province');
  };

  return (
    <Wrapper title="Delivery">
      <div className="flex flex-col gap-3">
        <div className="flex w-full gap-3">
          <Input
            label="First Name"
            value={firstName}
            error={errors.firstName}
            onBlur={() => validateField('firstName')}
            onChange={(value) => onChange('firstName', value)}
          />
          <Input
            label="Last Name"
            value={lastName}
            error={errors.lastName}
            onBlur={() => validateField('lastName')}
            onChange={(value) => onChange('lastName', value)}
          />
        </div>
        <Input
          label="Address"
          value={address}
          error={errors.address}
          onBlur={() => validateField('address')}
          onChange={(value) => onChange('address', value)}
        />
        <Input
          className="md:hidden"
          label="City"
          value={city}
          error={errors.city}
          onBlur={() => validateField('city')}
          onChange={(value) => onChange('city', value)}
        />
        <div className="flex w-full gap-3">
          <Input
            className="max-md:hidden"
            label="City"
            value={city}
            error={errors.city}
            onBlur={() => validateField('city')}
            onChange={(value) => onChange('city', value)}
          />
          <Dropdown
            label="State / Province"
            value={province}
            options={provinces}
            error={errors.province}
            disabled={!country}
            onBlur={() => validateField('province')}
            onSelect={(value) => {
              onChange('province', value);
              setError('province', true);
            }}
            onReset={() => {
              handleReset('province');
              setError('province');
            }}
          />
          <Input
            label="ZIP / Postal Code"
            value={zip}
            error={errors.zip}
            onBlur={() => validateField('zip')}
            onChange={(value) => onChange('zip', value)}
          />
        </div>
        <Dropdown
          label="Country"
          value={country}
          options={countries}
          error={errors.country}
          onBlur={() => validateField('country')}
          onSelect={handleCountrySelect}
          onReset={() => {
            handleReset('country');
            setError('country');
          }}
        />
      </div>
    </Wrapper>
  );
};

export default Delivery;
