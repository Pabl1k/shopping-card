import { FC, useEffect, useState } from 'react';
import Input from '../components/Input/Input.tsx';
import Wrapper from '../components/Wrapper.tsx';
import { DeliveryState } from '../App.tsx';
import Dropdown from '../components/Dropdown.tsx';

interface Props {
  deliveryState: DeliveryState;
  onChange: (field: keyof DeliveryState, value: string) => void;
}

const provinces = [
  'Alberta',
  'Guangdong',
  'Bavaria',
  'La Rioja',
  'KwaZulu-Natal',
  'Sindh',
  'Mendoza',
  'Nagano',
  'Tamil Nadu',
  'Oaxaca'
];

const mapDtoToCountryName = (dto: { name: { common: string } }): string => dto.name.common;

const Delivery: FC<Props> = ({ deliveryState, onChange }) => {
  const { firstName, lastName, address, city, province, zip, country } = deliveryState;
  const [countries, setCountries] = useState<string[]>([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await fetch('https://restcountries.com/v3.1/region/europe');
        const json = await res.json();
        const list: string[] = json.map(mapDtoToCountryName).sort();
        setCountries(list);
      } catch (error) {
        console.error('Failed to fetch country', error);
      }
    };

    fetchCountries();
  }, []);

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
            onSelect={(value) => onChange('province', value)}
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
            onChange('province', '');
          }}
        />
      </div>
    </Wrapper>
  );
};

export default Delivery;
