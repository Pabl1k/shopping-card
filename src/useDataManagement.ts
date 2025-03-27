import { useState } from 'react';
import {
  CustomerInformation,
  DeliveryFields,
  Fields,
  initialState,
  PaymentFields
} from './model.ts';
import { useDataValidation } from './useDataValidation.ts';

export const useDataManagement = () => {
  const [state, setState] = useState<CustomerInformation>(initialState);
  const { errors, validateField, setError } = useDataValidation(state);

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

  const save = async () => {
    console.log(state);
  };

  return {
    emailState: state.email,
    deliveryState,
    paymentState,
    errors,
    validateField,
    setError,
    handleChange,
    save
  };
};
