import ProductOverview from './containers/ProductOverview.tsx';
import Wrapper from './components/Wrapper.tsx';
import Input from './components/Input/Input.tsx';
import Delivery from './containers/Delivery.tsx';
import Payment from './containers/Payment.tsx';
import Benefits from './containers/Benefits.tsx';
import Header from './containers/Header.tsx';

const App = () => {
  return (
    <>
      <Header />

      <div className="flex max-md:flex-col md:px-[10vw] md:pt-4 pb-4">
        <div className="md:hidden">
          <ProductOverview />
        </div>
        <div>
          <div className="flex flex-col gap-3">
            <Wrapper title="Contact">
              <Input label="Email Address" value="" />
            </Wrapper>

            <Delivery />

            <Payment />
          </div>

          <Benefits />
        </div>
        <div className="max-md:hidden w-full pl-[38px]">
          <ProductOverview />
        </div>
      </div>
    </>
  );
};

export default App;
