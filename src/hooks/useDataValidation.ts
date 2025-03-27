import { CustomerInformation, Fields, initialState } from './model.ts';
import { object, ObjectSchema, string, ValidationError } from 'yup';
import { useState } from 'react';

type Errors = Record<Fields, string>;

export const useDataValidation = (state: CustomerInformation) => {
  const [errors, setErrors] = useState<Errors>(initialState);

  const validationSchema: ObjectSchema<CustomerInformation> = object().shape({
    email: string().email('Invalid email format').required('Email is required'),
    firstName: string().required('First name is required'),
    lastName: string().required('Last name is required'),
    address: string().required('Address is required'),
    city: string().required('City is required'),
    province: string().required('Province is required'),
    zip: string().required('Zip code is required'),
    country: string().required('Country is required'),
    cardNumber: string()
      .matches(/^\d{16}$/, 'Credit card number must be exactly 16 digits')
      .required('Card number is required'),
    expiration: string()
      .matches(/^(0[1-9]|1[0-2])\/\d{2}$/, 'Expiration date must be in MM/YY format')
      .required('Expiration date is required'),
    securityCode: string()
      .matches(/^\d{3,4}$/, 'Security code must be 3 or 4 digits')
      .required('Security code is required'),
    nameOnCard: string().required('Name on card is required')
  });

  const handleErrorSet = (field: Fields, message: string) => {
    setErrors((prevState) => ({
      ...prevState,
      [field]: message
    }));
  };

  const setError = (field: Fields, reset = false) => {
    if (reset) {
      handleErrorSet(field, '');
      return;
    }

    const message = field === 'country' ? 'Country is required' : 'Province is required';
    handleErrorSet(field, message);
  };

  const validateField = async (field: Fields) => {
    try {
      await validationSchema.validateAt(field, state);
      handleErrorSet(field, '');
    } catch (error) {
      if (error instanceof ValidationError) {
        handleErrorSet(field, error.message);
      } else {
        console.error('Unexpected error occurred:', error);
      }
    }
  };

  const submitValidate = async () => {
    try {
      await validationSchema.validate(state, { abortEarly: false });
      return true;
    } catch (errors) {
      if (errors instanceof ValidationError) {
        for (const error of errors.inner) {
          handleErrorSet(error.path as Fields, error.message);
        }
      } else {
        console.error('Unexpected error occurred:', errors);
      }

      return false;
    }
  };

  return {
    errors,
    validateField,
    setError,
    submitValidate
  };
};
