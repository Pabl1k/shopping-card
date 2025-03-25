import { FC, ReactNode } from 'react';

interface Props {
  title: string;
  children: ReactNode;
}

const Wrapper: FC<Props> = ({ title, children }) => {
  return (
    <div className="bg-background-white flex flex-col py-3">
      <span className="text-large font-bold leading-large mb-3">{title}</span>
      {children}
    </div>
  );
};

export default Wrapper;
