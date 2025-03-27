import { useState } from 'react';
import clsx from 'clsx';
import { ReactComponent as ArrowIcon } from '../assets/icons/arrow.svg';
import productPicture from '../assets/order.png';

const PRICE = '$299.97';
const PRODUCT_NAME = 'LogoIpsum IPL + Warranty';
const PRODUCT_COUNT = 3;

const ProductOverview = () => {
  const [open, setOpen] = useState(true);

  return (
    <>
      <div
        className="h-[52px] flex items-center justify-between border-b border-border md:hidden max-md:px-4"
        onClick={() => setOpen(!open)}
      >
        <div className="flex items-center cursor-pointer">
          <span className="mr-3">Order overview</span>
          <ArrowIcon className={clsx(!open && 'rotate-180', 'transform transition-transform')} />
        </div>
        <span className="font-medium">{PRICE}</span>
      </div>
      <div
        className={clsx(
          open ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0',
          'overflow-hidden transition-all duration-300  border-b border-border'
        )}
      >
        <div className="max-md:px-4 mt-4 mb-3 pb-3 flex items-center justify-between">
          <div className="flex items-center">
            <div className="relative">
              <div className="size-[64px]">
                <img src={productPicture} alt="Product" className="rounded-button" />
              </div>
              <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-background-dark-grey text-white text-xs font-bold size-[21px] flex items-center justify-center rounded-full">
                {PRODUCT_COUNT}
              </span>
            </div>
            <span className="font-bold mx-4 text-nowrap">{PRODUCT_NAME}</span>
          </div>
          <span className="font-medium">{PRICE}</span>
        </div>
      </div>
    </>
  );
};

export default ProductOverview;
