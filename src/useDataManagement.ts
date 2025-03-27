import { useState } from 'react';
import { CustomerInformation, DeliveryFields, Fields, PaymentFields } from './model.ts';

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

export const useDataManagement = () => {
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

  return {
    emailState: state.email,
    deliveryState,
    paymentState,
    handleChange
  };
};
