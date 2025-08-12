import {FC, ReactNode} from 'react';

export const BlockHeader: FC<{children: ReactNode}> = ({children}) => {

  return (
  <div className="z-1 relative overflow-visible mb-2">
    <div className="absolute top-[-5px] left-[-7px] z-0 ">
      <div className="w-5 h-5 bg-radial from-accent from-20%  to-transparent to-20% bg-size-[7px_7px] opacity-50"></div>
    </div>
    <h3 className="text-xl font-semibold z-1 relative">{children}</h3>
  </div>
  );
};
