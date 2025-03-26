import { FC, ReactNode } from 'react';
import clsx from 'clsx';

interface Props {
  title: string;
  description?: string;
  children: ReactNode;
}

const Wrapper: FC<Props> = ({ title, description, children }) => {
  return (
    <div className="bg-background-white flex flex-col py-3 px-4">
      <span className={clsx(description ? 'mb-2' : 'mb-3', 'text-large font-bold leading-large')}>
        {title}
      </span>
      {description && <span className="text-small text-text-grey mb-2">{description}</span>}
      {children}
    </div>
  );
};

export default Wrapper;
