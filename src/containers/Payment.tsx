import { FC } from 'react';
import Input from '../components/Input/Input.tsx';
import Wrapper from '../components/Wrapper.tsx';
import { ReactComponent as Visa } from '../assets/icons/visa.svg';
import { ReactComponent as MasterCard } from '../assets/icons/mastercard.svg';
import { ReactComponent as Amex } from '../assets/icons/amex.svg';
import { ReactComponent as Diners } from '../assets/icons/diners.svg';
import Button from '../components/Button.tsx';
import InfoText from '../components/InfoText.tsx';
import { Fields, PaymentFields, PaymentState } from '../model.ts';

interface Props {
  paymentState: PaymentState;
  errors: PaymentState;
  validateField: (field: Fields) => Promise<void>;
  onChange: (field: keyof PaymentState, value: string) => void;
  onSave: () => void;
}

const Payment: FC<Props> = ({ paymentState, errors, validateField, onChange, onSave }) => {
  const { cardNumber, expiration, securityCode, nameOnCard } = paymentState;

  const paymentMethods = [<Visa />, <MasterCard />, <Amex />, <Diners />];

  const handleNumberField = (field: PaymentFields, value: string) => {
    const numbers = value.replace(/\D/g, '');

    onChange(field, numbers);
  };

  return (
    <Wrapper title="Payment" description="All transactions are secure and encrypted.">
      <div className="flex flex-col border border-border rounded-input mb-3">
        <div className="h-[56px] px-3 flex items-center justify-between bg-background-light-blue border border-border-blue rounded-tl-input rounded-tr-input">
          <div className="flex items-center">
            <input type="radio" defaultChecked className="size-[20px]" />
            <span className="ml-2">Credit Card</span>
          </div>
          <div className="flex gap-1">
            {paymentMethods.map((method, index) => (
              <div key={index}>{method}</div>
            ))}
          </div>
        </div>
        <div className="flex flex-col p-3 gap-3 bg-background-light-grey">
          <Input
            label="Card number"
            value={cardNumber}
            error={errors.cardNumber}
            onBlur={() => validateField('cardNumber')}
            onChange={(value) => handleNumberField('cardNumber', value)}
          />
          <div className="flex gap-3">
            <Input
              label="Expiration (MM/YY)"
              value={expiration}
              error={errors.expiration}
              onBlur={() => validateField('expiration')}
              onChange={(value) => handleNumberField('expiration', value)}
            />
            <Input
              label="Security code"
              value={securityCode}
              error={errors.securityCode}
              onBlur={() => validateField('securityCode')}
              onChange={(value) => handleNumberField('securityCode', value)}
            />
          </div>
          <Input
            label="Name on card"
            value={nameOnCard}
            error={errors.nameOnCard}
            onBlur={() => validateField('nameOnCard')}
            onChange={(value) => onChange('nameOnCard', value)}
          />
        </div>
      </div>

      <Button label="Complete order" onClick={onSave} />
      <InfoText />
    </Wrapper>
  );
};

export default Payment;
