import { FC } from 'react';
import Input from '../components/Input/Input.tsx';
import Wrapper from '../components/Wrapper.tsx';

interface Props {
  onChange?: () => void;
}

const Payment: FC<Props> = () => {
  return (
    <Wrapper title="Payment">
      <span className="text-small text-text-grey">All transactions are secure and encrypted.</span>
      <div className="flex flex-col gap-3">
        <Input label="Card number" value="" />
        <div className="flex gap-3">
          <Input label="Expiration (MM/YY)" value="" />
          <Input label="Security code" value="" />
        </div>
        <Input label="Name on card" value="" />
      </div>
    </Wrapper>
  );
};

export default Payment;
