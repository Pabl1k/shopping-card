import { FC, ReactNode } from 'react';

interface Props {
  title: string;
  children: ReactNode;
}

const Wrapper: FC<Props> = ({ title, children }) => {
  return (
    <div className="bg-background-white flex flex-col p-4">
      <span className="text-2xl font-bold leading-large mb-3">{title}</span>
      {children}
    </div>
  );
};

export default Wrapper;
