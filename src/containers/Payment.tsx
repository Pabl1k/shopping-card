import { FC } from 'react';
import Input from '../components/Input/Input.tsx';
import Wrapper from '../components/Wrapper.tsx';
import { ReactComponent as Visa } from '../assets/icons/visa.svg';
import { ReactComponent as MasterCard } from '../assets/icons/mastercard.svg';
import { ReactComponent as Amex } from '../assets/icons/amex.svg';
import { ReactComponent as Diners } from '../assets/icons/diners.svg';
import Button from '../components/Button.tsx';
import InfoText from '../components/InfoText.tsx';
import { PaymentState } from '../App.tsx';

interface Props {
  paymentState: PaymentState;
  onChange: (field: keyof PaymentState, value: string) => void;
}

const Payment: FC<Props> = ({ paymentState, onChange }) => {
  const { cardNumber, expiration, securityCode, nameOnCard } = paymentState;

  const paymentMethods = [<Visa />, <MasterCard />, <Amex />, <Diners />];

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
            value={cardNumber.toString()}
            onChange={(value) => onChange('cardNumber', value)}
          />
          <div className="flex gap-3">
            <Input
              label="Expiration (MM/YY)"
              value={expiration}
              onChange={(value) => onChange('expiration', value)}
            />
            <Input
              label="Security code"
              value={securityCode.toString()}
              onChange={(value) => onChange('securityCode', value)}
            />
          </div>
          <Input
            label="Name on card"
            value={nameOnCard}
            onChange={(value) => onChange('nameOnCard', value)}
          />
        </div>
      </div>

      <Button label="Complete order" />
      <InfoText />
    </Wrapper>
  );
};

export default Payment;
