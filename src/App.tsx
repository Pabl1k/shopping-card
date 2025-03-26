import ProductOverview from './components/ProductOverview.tsx';
import Wrapper from './components/Wrapper.tsx';
import Input from './components/Input/Input.tsx';
import Delivery from './containers/Delivery.tsx';
import Payment from './containers/Payment.tsx';
import Button from './components/Button.tsx';
import InfoText from './components/InfoText.tsx';
import Benefits from './components/Benefits.tsx';

const App = () => {
  return (
    <div className="flex max-md:flex-col md:px-[10vw] md:pt-4 pb-4">
      {/* TODO logo */}
      <div className="md:hidden">
        <ProductOverview />
      </div>
      <div>
        <div className="flex flex-col w-full bg-background-white px-4 pb-4">
          <Wrapper title="Contact">
            <Input label="Email Address" value="" />
          </Wrapper>

          <Delivery />

          <Payment />

          <Button label="Complete order" />

          <InfoText />
        </div>

        <Benefits />
      </div>
      <div className="max-md:hidden w-full pt-[40px] pl-[38px]">
        <ProductOverview />
      </div>
    </div>
  );
};

export default App;
