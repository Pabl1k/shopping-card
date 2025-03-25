import ProductOverview from './components/ProductOverview.tsx';
import Wrapper from './components/Wrapper.tsx';
import Input from './components/Input/Input.tsx';
import Delivery from './containers/Delivery.tsx';
import Payment from './containers/Payment.tsx';
import Button from './components/Button.tsx';

const App = () => {
  return (
    <div className="flex max-md:flex-col px-[10vw] mb-4">
      <div className="md:hidden max-md:mb-4">
        <ProductOverview />
      </div>
      <div className="flex flex-col w-full">
        <Wrapper title="Contact">
          <Input label="Email Address" value="" />
        </Wrapper>

        <Delivery />

        <Payment />

        <Button label="Complete order" />
      </div>
      <div className="max-md:hidden w-full pt-[40px] pl-[38px]">
        <ProductOverview />
      </div>
    </div>
  );
};

export default App;
