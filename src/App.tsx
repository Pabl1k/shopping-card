import ProductOverview from './containers/ProductOverview.tsx';
import Wrapper from './components/Wrapper.tsx';
import Input from './components/Input/Input.tsx';
import Delivery from './containers/Delivery.tsx';
import Payment from './containers/Payment.tsx';
import Benefits from './containers/Benefits.tsx';
import Header from './containers/Header.tsx';
import { useState } from 'react';

export type DeliveryFields =
  | 'firstName'
  | 'lastName'
  | 'address'
  | 'city'
  | 'province'
  | 'zip'
  | 'country';
export type PaymentFields = 'cardNumber' | 'expiration' | 'securityCode' | 'nameOnCard';
type Fields = 'email' | DeliveryFields | PaymentFields;

export type DeliveryState = Record<DeliveryFields, string>;
export type PaymentState = Record<PaymentFields, string>;
type CustomerInformation = Record<Fields, string>;

const initialState: CustomerInformation = {
  email: '',
  firstName: '',
  lastName: '',
  address: '',
  city: '',
  province: '',
  zip: '',
  country: '',
  cardNumber: '',
  expiration: '',
  securityCode: '',
  nameOnCard: ''
};

const App = () => {
  const [state, setState] = useState<CustomerInformation>(initialState);

  const deliveryState: Record<DeliveryFields, string> = {
    firstName: state.firstName,
    lastName: state.lastName,
    address: state.address,
    city: state.city,
    province: state.province,
    zip: state.zip,
    country: state.country
  };
  const paymentState: Record<PaymentFields, string> = {
    cardNumber: state.cardNumber,
    expiration: state.expiration,
    securityCode: state.securityCode,
    nameOnCard: state.nameOnCard
  };

  const handleChange = (field: Fields, value: string) => {
    setState((prevState) => ({
      ...prevState,
      [field]: value
    }));
  };

  return (
    <>
      <Header />

      <div className="flex max-md:flex-col md:px-[10vw] md:pt-4 pb-4">
        <div className="md:hidden">
          <ProductOverview />
        </div>
        <div>
          <div className="flex flex-col gap-3">
            <Wrapper title="Contact">
              <Input
                label="Email Address"
                value={state.email}
                onChange={(value) => handleChange('email', value)}
              />
            </Wrapper>

            <Delivery deliveryState={deliveryState} onChange={handleChange} />

            <Payment paymentState={paymentState} onChange={handleChange} />
          </div>

          <Benefits />
        </div>
        <div className="max-md:hidden w-full pl-[38px]">
          <ProductOverview />
        </div>
      </div>
    </>
  );
};

export default App;
