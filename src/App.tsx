import ProductOverview from './containers/ProductOverview.tsx';
import Wrapper from './components/Wrapper.tsx';
import Input from './components/Input.tsx';
import Delivery from './containers/Delivery.tsx';
import Payment from './containers/Payment.tsx';
import Benefits from './containers/Benefits.tsx';
import Header from './containers/Header.tsx';
import { useDataManagement } from './hooks/useDataManagement.ts';

const App = () => {
  const {
    emailState,
    deliveryState,
    paymentState,
    emailError,
    deliveryErrors,
    paymentErrors,
    handleChange,
    validateField,
    setRequiredFieldError,
    save
  } = useDataManagement();

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
              <Input
                label="Email Address"
                value={emailState}
                error={emailError}
                inputMode="email"
                onBlur={() => validateField('email')}
                onChange={(value) => handleChange('email', value)}
              />
            </Wrapper>

            <Delivery
              deliveryState={deliveryState}
              errors={deliveryErrors}
              validateField={validateField}
              setRequiredFieldError={setRequiredFieldError}
              onChange={handleChange}
            />

            <Payment
              paymentState={paymentState}
              errors={paymentErrors}
              validateField={validateField}
              onChange={handleChange}
              onSave={save}
            />
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
