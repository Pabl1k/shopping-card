import ProductOverview from './containers/ProductOverview.tsx';
import Wrapper from './components/Wrapper.tsx';
import Input from './components/Input.tsx';
import Delivery from './containers/Delivery.tsx';
import Payment from './containers/Payment.tsx';
import Benefits from './containers/Benefits.tsx';
import Header from './containers/Header.tsx';
import { useDataManagement } from './useDataManagement.ts';

const App = () => {
  const {
    emailState,
    deliveryState,
    paymentState,
    errors,
    handleChange,
    validateField,
    setError,
    save
  } = useDataManagement();

  const deliveryErrors = {
    firstName: errors.firstName,
    lastName: errors.lastName,
    address: errors.address,
    city: errors.city,
    province: errors.province,
    zip: errors.zip,
    country: errors.country
  };
  const paymentErrors = {
    cardNumber: errors.cardNumber,
    expiration: errors.expiration,
    securityCode: errors.securityCode,
    nameOnCard: errors.nameOnCard
  };

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
                error={errors.email}
                onBlur={() => validateField('email')}
                onChange={(value) => handleChange('email', value)}
              />
            </Wrapper>

            <Delivery
              deliveryState={deliveryState}
              errors={deliveryErrors}
              validateField={validateField}
              setError={setError}
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
