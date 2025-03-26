import { ReactComponent as Lock } from '../assets/icons/lock.svg';

const InfoText = () => {
  return (
    <div className="flex text-text-grey w-full mt-3 justify-center">
      <Lock className="size-[14px] mr-2" />
      <span>All transactions are secure and encrypted</span>
    </div>
  );
};

export default InfoText;
