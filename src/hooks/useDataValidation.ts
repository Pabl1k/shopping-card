import { CustomerInformation, Fields, initialState } from './model.ts';
import { object, ObjectSchema, string, ValidationError } from 'yup';
import { useState } from 'react';

type Errors = Record<Fields, string>;

const errorMapper = {
  fieldRequired: 'Field is required',
  invalidEmail: 'Invalid email format',
  creditCardNumber: 'Credit card number must be exactly 16 digits',
  expirationDate: 'Expiration date must be in MM/YY format',
  securityCode: 'Security code must be 3 or 4 digits'
} as const;

export const useDataValidation = (state: CustomerInformation) => {
  const [errors, setErrors] = useState<Errors>(initialState);

  const validationSchema: ObjectSchema<CustomerInformation> = object().shape({
    email: string().email(errorMapper.invalidEmail).required(errorMapper.fieldRequired),
    firstName: string().required(errorMapper.fieldRequired),
    lastName: string().required(errorMapper.fieldRequired),
    address: string().required(errorMapper.fieldRequired),
    city: string().required(errorMapper.fieldRequired),
    province: string().required(errorMapper.fieldRequired),
    zip: string().required(errorMapper.fieldRequired),
    country: string().required(errorMapper.fieldRequired),
    cardNumber: string()
      .matches(/^\d{16}$/, errorMapper.creditCardNumber)
      .required(errorMapper.fieldRequired),
    expiration: string()
      .matches(/^(0[1-9]|1[0-2])\/\d{2}$/, errorMapper.expirationDate)
      .required(errorMapper.fieldRequired),
    securityCode: string()
      .matches(/^\d{3,4}$/, errorMapper.securityCode)
      .required(errorMapper.fieldRequired),
    nameOnCard: string().required(errorMapper.fieldRequired)
  });

  const handleErrorSet = (field: Fields, message: string) => {
    setErrors((prevState) => ({
      ...prevState,
      [field]: message
    }));
  };

  const setRequiredFieldError = (field: Fields, reset = false) => {
    if (reset) {
      handleErrorSet(field, '');
      return;
    }

    handleErrorSet(field, errorMapper.fieldRequired);
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
    setRequiredFieldError,
    submitValidate
  };
};
