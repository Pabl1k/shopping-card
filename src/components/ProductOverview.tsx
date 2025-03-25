import { useState } from 'react';
import clsx from 'clsx';
import { ReactComponent as ArrowIcon } from '../assets/icons/arrow.svg';
import orderPic from '../assets/order.png';

const PRICE = '$299.97';
const PRODUCT_NAME = 'LogoIpsum IPL + Warranty';
const PRODUCT_COUNT = 3;

const ProductOverview = () => {
  const [open, setOpen] = useState(true);

  return (
    <>
      <div className="h-[52px] flex items-center justify-between border-b border-grey mb-2 sm:hidden">
        <div className="flex items-center cursor-pointer" onClick={() => setOpen(!open)}>
          <span className="mr-3">Order overview</span>
          <ArrowIcon
            className={clsx(open && 'rotate-180', 'transform transition-transform duration-300')}
          />
        </div>
        <span className="font-medium">{PRICE}</span>
      </div>
      <div
        className={clsx(
          open ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0',
          'overflow-hidden transition-all duration-300'
        )}
      >
        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-center">
            <div className="relative">
              <img src={orderPic} alt="Order" className="size-[64px] rounded-sm" />
              <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-background-dark-grey text-white text-xs font-bold h-[21px] w-[21px] flex items-center justify-center rounded-full">
                {PRODUCT_COUNT}
              </span>
            </div>
            <span className="font-bold ml-4">{PRODUCT_NAME}</span>
          </div>
          <span className="font-medium">{PRICE}</span>
        </div>
      </div>
    </>
  );
};

export default ProductOverview;
