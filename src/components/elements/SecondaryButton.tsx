import {FC, ReactNode} from 'react';

export const SecondaryButton: FC<{children: ReactNode}> = ({children}) => {

  return (
  // eslint-disable-next-line max-len
  <button className="border-white border-solid border-2 rounded-full px-6 py-2 cursor-pointer  hover:bg-white hover:text-black transition-colors  duration-500">
    {children}
  </button>
  );
};
