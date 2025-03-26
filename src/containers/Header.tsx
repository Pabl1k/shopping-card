import { ReactComponent as Logo } from '../assets/icons/logo.svg';
import { ReactComponent as ShoppingBag } from '../assets/icons/shoppingBag.svg';

const Header = () => {
  return (
    <div className="h-[56px] bg-background-white flex items-center justify-between px-4 md:px-[10vw]">
      <Logo />
      <ShoppingBag />
    </div>
  );
};
export default Header;
