import { ReactNode } from 'react';
import { ReactComponent as Cashback } from '../assets/icons/cashback.svg';
import { ReactComponent as CustomerSupport } from '../assets/icons/customerSupport.svg';
import { ReactComponent as HappyCustomer } from '../assets/icons/happyCustomer.svg';

interface Item {
  title: string;
  description: string;
  icon: ReactNode;
}

const Benefits = () => {
  const items: Item[] = [
    {
      title: '90-Day Money Back Guarantee',
      description:
        "We love our products and we're confident you will too! If you're not in love with your LogoIpsum product, our easy return and refund policy is designed to make things as easy as possible for you.",
      icon: <Cashback />
    },
    {
      title: 'Over 75,000+ Happy Customer',
      description:
        'Everyone that tries LogoIpsum says it’s a must-have. We invest a lot of love and care into making our products, so you can enjoy seeing results when using it.',
      icon: <HappyCustomer />
    },
    {
      title: 'Professional Customer Support',
      description:
        'Our customer service works 24/7 for your satisfaction. Feel free to reach out to us anytime.',
      icon: <CustomerSupport />
    }
  ];

  return (
    <div className="border-t border-border px-4 mb-4">
      <div className="flex items-center gap-3 pt-3">
        <div className="flex-grow border-t border-border"></div>
        <span>Why Choose LogoIpsum</span>
        <div className="flex-grow border-t border-border"></div>
      </div>
      <div>
        {items.map((item) => (
          <div key={item.title} className="flex py-3">
            <div className="size-[32px]">{item.icon}</div>
            <div className="ml-3">
              <span className="font-bold">{item.title}</span>
              <p className="text-small text-background-dark-grey leading-small">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefits;
