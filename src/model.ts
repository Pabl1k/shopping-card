export type DeliveryFields =
  | 'firstName'
  | 'lastName'
  | 'address'
  | 'city'
  | 'province'
  | 'zip'
  | 'country';
export type PaymentFields = 'cardNumber' | 'expiration' | 'securityCode' | 'nameOnCard';
export type Fields = 'email' | DeliveryFields | PaymentFields;

export type DeliveryState = Record<DeliveryFields, string>;
export type PaymentState = Record<PaymentFields, string>;
export type CustomerInformation = Record<Fields, string>;
